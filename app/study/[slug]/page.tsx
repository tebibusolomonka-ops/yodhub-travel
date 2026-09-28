import { opportunityRoute } from "@/components/opportunity-detail";

const route = opportunityRoute("study");
export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export default route.Page;
