// app/showcase/showcase-config.js
import Pricing1 from "@/app/showcase/components/pricing1";
import Navbar1 from "@/app/showcase/components/navbar1";
import Card1 from "@/app/showcase/components/card1";
import Auth1 from "@/app/showcase/components/auth1";
import Calendar1 from "@/app/showcase/components/calendar1";
import StatusBadge1 from "@/app/showcase/components/statusBadge1";
import showcaseData from "./showcase-data.json";

const componentMap = {
  Pricing1,
  Navbar1,
  Card1,
  Auth1,
  Calendar1,
  StatusBadge1,
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