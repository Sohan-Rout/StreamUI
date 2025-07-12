import fs from "fs";
import path from "path";

const componentsToProcess = [
  {
    slug: "MinimalPricingLayout",
    title: "Minimalist Pricing Layout",
    description: "A clean, responsive SaaS pricing section showcasing multiple plans with feature highlights, clear call-to-action, and light/dark mode support, perfect for landing pages and indie products.",
    category: "pricing",
    componentPath: "./app/showcase/components/pricing1.jsx",
    implementation: "<PricingCard name=\"Pro\" price=\"$9/mo\" description=\"Access all advanced components and premium support.\" features={[\"All Starter Features\", \"Animated Components\", \"Priority Support\", \"Component Requests\"]} notIncluded={[\"Team Collaboration\"]} highlight={true} />",
  },
  {
    slug: "SimpleNavbar",
    title: "Minimalist Navbar",
    description: "A clean, simple and minimalist SaaS-friendly navbar",
    category: "navbar",
    componentPath: "./app/showcase/components/navbar1.jsx",
    implementation: "<Navbar logo={{ text: \"StreamUI\", href: \"/\", image: null }} links={[{ label: \"Home\", href: \"#home\" }, { label: \"Features\", href: \"#features\" }, { label: \"Reviews\", href: \"#Reviews\" }, { label: \"FAQs\", href: \"#faqs\" }]} mode=\"light\" />",
  },
  {
    slug: "BasicMinimalCard",
    title: "Minimalist Card",
    description: "A clean, minimalist card supports both light and dark modes for your SaaS apps.",
    category: "cards",
    componentPath: "./app/showcase/components/card1.jsx",
    implementation: "<Card logo=\"StreamUI\" title=\"This is a card\" description=\"This is the description of the card\"/>",
  },
];

function extractPropsFromImplementation(implementation) {
  const props = [];
  const propRegex = /(\w+)\s*=\s*({[^}]+}|\"[^\"]*\"|\'[^\']*\'|\{[^}]*\}|\[[^\]]*\])/g;
  let match;
  while ((match = propRegex.exec(implementation)) !== null) {
    const name = match[1];
    let defaultVal = match[2].trim();

    if (defaultVal.startsWith('"') || defaultVal.startsWith("'")) {
      defaultVal = defaultVal.slice(1, -1); // remove quotes
    } else if (defaultVal.startsWith("{") || defaultVal.startsWith("[")) {
      try {
        const parsed = eval(defaultVal);
        defaultVal = JSON.stringify(parsed, null, 2);
      } catch {
        // leave as is if cannot parse
      }
    }

    props.push({
      name,
      type: typeof defaultVal,
      required: false,
      default: defaultVal,
      description: ""
    });
  }
  return props;
}

const enrichedComponents = componentsToProcess.map((comp) => {
  const componentFullPath = path.resolve(comp.componentPath);
  const code = fs.readFileSync(componentFullPath, "utf-8");

  const match = code.match(/export default function (\w+)/);
  const componentName = match ? match[1] : "Component";

  const props = extractPropsFromImplementation(comp.implementation);

  return {
    slug: comp.slug,
    title: comp.title,
    description: comp.description,
    category: comp.category,
    code,
    implementation: comp.implementation,
    props,
    componentName
  };
});

fs.writeFileSync(
  path.resolve("./app/showcase/showcase-data.json"),
  JSON.stringify(enrichedComponents, null, 2),
  "utf-8"
);

console.log("✅ showcase-data.json updated: props auto-generated from manual implementation, ensuring clarity and human-readability.");