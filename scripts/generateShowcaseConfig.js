import fs from "fs";
import path from "path";

const componentsToProcess = [
  {
    slug: "MinimalPricingLayout",
    title: "Minimalist Pricing Layout",
    description: "A clean SaaS pricing section...",
    category: "pricing",
    componentPath: "./app/showcase/components/pricing1.jsx",
    implementation: "<PricingSection demoProp=\"Demo\" />",
  },
  {
    slug: "SimpleNavbar",
    title: "Minimalist Navbar",
    description: "A clean, SaaS-friendly navbar...",
    category: "navbar",
    componentPath: "./app/showcase/components/navbar1.jsx",
    implementation: "<Navbar logo=\"StreamUI\" links={links} />",
  },
  {
    slug: "BasicMinimalCard",
    title: "Minimalist Card",
    description: "A clean, minimalist card for SaaS apps.",
    category: "cards",
    componentPath: "./app/showcase/components/card1.jsx",
    implementation: "<DynamicComponentCard title=\"Card Title\" description=\"Card description.\" />",
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