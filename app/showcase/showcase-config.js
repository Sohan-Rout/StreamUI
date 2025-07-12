// app/showcase/showcase-config.js
import PricingSection from "@/app/showcase/components/pricing1";
import Navbar from "@/app/showcase/components/navbar1";
import DynamicComponentCard from "@/app/showcase/components/card1";
import showcaseData from "./showcase-data.json";

const componentMap = {
  PricingSection,
  Navbar,
  DynamicComponentCard,
};

const showcaseComponents = showcaseData.map(item => {
  if (!componentMap[item.componentName]) {
    console.error(`❌ Missing or incorrect import for: ${item.componentName}`);
  }
  return {
    ...item,
    preview: componentMap[item.componentName] || null,
  };
});

export default showcaseComponents;