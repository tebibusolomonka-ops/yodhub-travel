"use client";

import { useEffect, useRef, useState } from "react";
import { Globe2, Pause, Play } from "lucide-react";

type Country = { properties: { ADMIN: string }; geometry: { type: string; coordinates: number[][][] | number[][][][] } };
const destinations = [
  { name: "Italy", lat: 43.62, lon: 13.52 },
  { name: "Germany", lat: 52.52, lon: 13.4 },
  { name: "Russia", lat: 55.76, lon: 37.62 },
  { name: "UAE", lat: 25.2, lon: 55.27 },
];

export function TravelGlobe() {
  const container = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const host = container.current;
    if (!host) return;
    const abort = new AbortController();
    let disposed = false;
    let teardown = () => {};
    async function initialize() {
      const THREE = await import("three");
      if (disposed || !host) return;
      const response = await fetch("/globe-countries.geojson", { signal: abort.signal });
      if (!response.ok) throw new Error("Map unavailable");
      const data = await response.json() as { features: Country[] };
      if (disposed) return;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x061a3b, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.domElement.setAttribute("aria-hidden", "true");
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 30);
      camera.position.set(0, 0, 4.2);
      const earth = new THREE.Group(); earth.rotation.set(0.18, -0.6, -0.1); scene.add(earth);
      const geometries: import("three").BufferGeometry[] = [];
      const materials: import("three").Material[] = [];
      const textures: import("three").Texture[] = [];
      const position = (lat: number, lon: number, radius = 1) => {
        const p = lat * Math.PI / 180, t = lon * Math.PI / 180;
        return new THREE.Vector3(Math.cos(p) * Math.sin(t), Math.sin(p), Math.cos(p) * Math.cos(t)).multiplyScalar(radius);
      };
      const line = (points: import("three").Vector3[], color: number, opacity: number) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
        geometries.push(geometry); materials.push(material);
        return new THREE.Line(geometry, material);
      };

      // Real geographic polygons mapped to an equirectangular texture.
      const map = document.createElement("canvas"); map.width = 2048; map.height = 1024;
      const ctx = map.getContext("2d")!;
      ctx.fillStyle = "#071c35"; ctx.fillRect(0, 0, map.width, map.height);
      for (const country of data.features) {
        const polygons = country.geometry.type === "Polygon" ? [country.geometry.coordinates as number[][][]] : country.geometry.coordinates as number[][][][];
        ctx.fillStyle = country.properties.ADMIN === "Ethiopia" ? "#e9b34b" : "#245a7d";
        ctx.strokeStyle = country.properties.ADMIN === "Ethiopia" ? "#ffe9a7" : "#4381a0";
        ctx.lineWidth = country.properties.ADMIN === "Ethiopia" ? 2.5 : 0.8;
        for (const polygon of polygons) {
          ctx.beginPath();
          for (const ring of polygon) {
            ring.forEach(([lon, lat], i) => {
              const x = (lon + 180) / 360 * map.width, y = (90 - lat) / 180 * map.height;
              if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            }); ctx.closePath();
          } ctx.fill("evenodd"); ctx.stroke();
        }
      }
      const texture = new THREE.CanvasTexture(map); texture.colorSpace = THREE.SRGBColorSpace;
      texture.offset.x = 0.25; texture.wrapS = THREE.RepeatWrapping; textures.push(texture);
      const surface = new THREE.SphereGeometry(1, 96, 64);
      const surfaceMaterial = new THREE.MeshPhongMaterial({ map: texture, shininess: 18, specular: 0x275a86 });
      geometries.push(surface); materials.push(surfaceMaterial); earth.add(new THREE.Mesh(surface, surfaceMaterial));
      scene.add(new THREE.AmbientLight(0xabcfff, 1.8));
      const light = new THREE.DirectionalLight(0xd7eaff, 2.5); light.position.set(-3, 3, 4); scene.add(light);
      const atmosphereMaterial = new THREE.ShaderMaterial({
        transparent: true, side: THREE.BackSide, blending: THREE.AdditiveBlending, depthWrite: false,
        uniforms: { glowColor: { value: new THREE.Color(0x328fda) } },
        vertexShader: "varying vec3 vNormal; varying vec3 vView; void main(){vec4 p=modelViewMatrix*vec4(position,1.0);vNormal=normalize(normalMatrix*normal);vView=normalize(-p.xyz);gl_Position=projectionMatrix*p;}",
        fragmentShader: "uniform vec3 glowColor; varying vec3 vNormal; varying vec3 vView; void main(){float rim=pow(1.0-abs(dot(normalize(vNormal),normalize(vView))),3.0);gl_FragColor=vec4(glowColor,rim*0.48);}",
      });
      const atmosphereGeometry = new THREE.SphereGeometry(1.055, 64, 48);
      geometries.push(atmosphereGeometry); materials.push(atmosphereMaterial);
      scene.add(new THREE.Mesh(atmosphereGeometry, atmosphereMaterial));
      for (let lat = -60; lat <= 60; lat += 30) earth.add(line(Array.from({ length: 181 }, (_, i) => position(lat, i * 2 - 180, 1.002)), 0x5c9ac0, 0.11));
      for (let lon = -180; lon < 180; lon += 30) earth.add(line(Array.from({ length: 91 }, (_, i) => position(i * 2 - 90, lon, 1.002)), 0x5c9ac0, 0.11));

      const labels: { element: HTMLSpanElement; point: import("three").Vector3 }[] = [];
      const marker = (name: string, lat: number, lon: number, origin = false) => {
        const point = position(lat, lon, 1.018);
        const geometry = new THREE.SphereGeometry(origin ? 0.022 : 0.013, 16, 12);
        const material = new THREE.MeshBasicMaterial({ color: origin ? 0xffd76d : 0xffca57 });
        geometries.push(geometry); materials.push(material);
        const mesh = new THREE.Mesh(geometry, material); mesh.position.copy(point); earth.add(mesh);
        const element = document.createElement("span"); element.className = origin ? "globe-label globe-label-origin" : "globe-label";
        element.textContent = name; element.setAttribute("aria-hidden", "true"); host.appendChild(element);
        labels.push({ element, point }); return point;
      };
      const origin = marker("ETHIOPIA", 9.03, 38.75, true);
      const routes = destinations.map((destination, index) => {
        const end = marker(destination.name, destination.lat, destination.lon);
        const startNormal = origin.clone().normalize(), endNormal = end.clone().normalize();
        const angle = startNormal.angleTo(endNormal);
        const routePoint = (t: number) => startNormal.clone().multiplyScalar(Math.sin((1 - t) * angle) / Math.sin(angle)).addScaledVector(endNormal, Math.sin(t * angle) / Math.sin(angle)).normalize().multiplyScalar(1.022 + Math.sin(t * Math.PI) * (0.13 + index * 0.025));
        const curve = new THREE.CatmullRomCurve3(Array.from({ length: 65 }, (_, i) => routePoint(i / 64)));
        const geometry = new THREE.TubeGeometry(curve, 80, 0.003, 5, false);
        const material = new THREE.MeshBasicMaterial({ color: 0xe9ab34, transparent: true, opacity: 0.75 });
        geometries.push(geometry); materials.push(material); earth.add(new THREE.Mesh(geometry, material));
        const beadGeometry = new THREE.SphereGeometry(0.009, 12, 8), beadMaterial = new THREE.MeshBasicMaterial({ color: 0xfff0ba });
        geometries.push(beadGeometry); materials.push(beadMaterial);
        const bead = new THREE.Mesh(beadGeometry, beadMaterial); earth.add(bead);
        return { bead, routePoint, offset: index * 0.22 };
      });

      let frame = 0, previous = 0, elapsed = 0, visible = true, dragging = false, pointerX = 0;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      pausedRef.current = reducedMotion.matches; setPaused(reducedMotion.matches);
      const resize = () => { const { width, height } = host.getBoundingClientRect(); renderer.setSize(width, height); camera.aspect = width / height; camera.updateProjectionMatrix(); };
      const observer = new ResizeObserver(resize); observer.observe(host); resize();
      const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }); intersection.observe(host);
      const pointerDown = (event: PointerEvent) => { dragging = true; pointerX = event.clientX; host.setPointerCapture(event.pointerId); };
      const pointerMove = (event: PointerEvent) => { if (dragging) { earth.rotation.y += (event.clientX - pointerX) * 0.006; pointerX = event.clientX; } };
      const pointerUp = () => { dragging = false; };
      host.addEventListener("pointerdown", pointerDown); host.addEventListener("pointermove", pointerMove); host.addEventListener("pointerup", pointerUp); host.addEventListener("pointercancel", pointerUp);
      function render(time: number) {
        frame = requestAnimationFrame(render);
        const dt = Math.min((time - previous) / 1000 || 0, 0.04); previous = time;
        if (!visible || document.hidden) return;
        if (!pausedRef.current && !dragging) { earth.rotation.y += dt * 0.075; elapsed += dt; }
        routes.forEach(({ bead, routePoint, offset }) => bead.position.copy(routePoint((elapsed * 0.17 + offset) % 1)));
        earth.updateMatrixWorld(true);
        for (const { element, point } of labels) {
          const world = earth.localToWorld(point.clone());
          const facing = world.clone().normalize().dot(camera.position.clone().sub(world).normalize());
          element.style.opacity = facing > 0.15 ? "1" : "0";
          const screen = world.project(camera);
          element.style.left = `${(screen.x + 1) / 2 * host!.clientWidth}px`; element.style.top = `${(1 - screen.y) / 2 * host!.clientHeight}px`;
        }
        renderer.render(scene, camera);
      }
      teardown = () => {
        cancelAnimationFrame(frame); observer.disconnect(); intersection.disconnect();
        host.removeEventListener("pointerdown", pointerDown); host.removeEventListener("pointermove", pointerMove); host.removeEventListener("pointerup", pointerUp); host.removeEventListener("pointercancel", pointerUp);
        geometries.forEach((g) => g.dispose()); materials.forEach((m) => m.dispose()); textures.forEach((t) => t.dispose());
        renderer.dispose(); renderer.domElement.remove(); labels.forEach(({ element }) => element.remove());
      };
      frame = requestAnimationFrame(render); setReady(true);
    }
    initialize().catch((error) => { if (!disposed && error?.name !== "AbortError") { teardown(); setFailed(true); } });
    return () => { disposed = true; abort.abort(); teardown(); };
  }, []);

  return (
    <figure className="travel-globe" aria-label="Rotating 3D globe with Ethiopia highlighted and routes to Italy, Germany, Russia, and the United Arab Emirates">
      <div className="globe-halo" aria-hidden="true" />
      <div ref={container} className="globe-stage" />
      {!ready && <div className="globe-loading" role="status"><Globe2 className="h-14 w-14 text-[#e9b34b]" /><span>{failed ? "From Ethiopia to the world" : "Exploring the world…"}</span></div>}
      <figcaption className="globe-caption"><span className="globe-origin-dot" /><span>ADDIS ABABA <span className="text-white/35">→</span> THE WORLD</span></figcaption>
      {ready && <div className="globe-controls"><span>Drag to explore</span><button type="button" onClick={() => { pausedRef.current = !paused; setPaused(!paused); }} aria-label={paused ? "Play globe animation" : "Pause globe animation"} className="globe-toggle">{paused ? <Play size={14} /> : <Pause size={14} />}</button></div>}
    </figure>
  );
}
