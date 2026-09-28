import { opportunityRoute } from "@/components/opportunity-detail";

const route = opportunityRoute("conferences");
export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export default route.Page;
