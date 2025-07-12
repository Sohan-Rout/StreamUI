import { motion } from "streamui-deps";
import { FaCheck } from "streamui-deps";
import { IoIosClose } from "streamui-deps";
import PropTypes from "prop-types";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Basic components and regular updates.",
    features: ["10+ Components", "Basic Animations", "Light/Dark Mode", "All Starter Features"],
    notIncluded: ["Priority Support", "Component Requests", "Team Collaboration"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$9/mo",
    description: "Access all advanced components and premium support.",
    features: ["All Starter Features", "Animated Components", "Priority Support", "Component Requests"],
    notIncluded: ["Priority Support", "Component Requests", "Team Collaboration"],
    highlight: true,
  },
  {
    name: "Team",
    price: "$29/mo",
    description: "For teams and startups needing advanced support.",
    features: [
      "All Pro Features",
      "Team Collaboration",
      "Custom Branding",
      "Animated Components",
      "Priority Support",
      "Light/Dark Mode",
      "Component Requests",
    ],
    highlight: false,
  },
];

export function PricingCard({
  name,
  price,
  description,
  features,
  notIncluded,
  highlight,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`border rounded-xl p-6 shadow-sm bg-white dark:bg-neutral-900 ${
        highlight
          ? "border-blue-500 shadow-lg"
          : "border-gray-200 dark:border-neutral-700"
      }`}
    >
      <div className="flex justify-center">
        <h3 className="text-lg dark:text-black font-medium bg-green-500 mb-4 px-6 py-1 rounded-full">
          {name}
        </h3>
      </div>
      <p className="text-3xl font-bold mb-4">{price}</p>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <ul className="text-sm text-left mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center mb-1">
            <span className="text-green-500 mr-2">
              <FaCheck />
            </span>{" "}
            {feature}
          </li>
        ))}
        {notIncluded &&
          notIncluded.map((item) => (
            <li key={item} className="flex items-center mb-1">
              <span className="text-red-500">
                <IoIosClose className="text-2xl font-semibold" />
              </span>
              {item}
            </li>
          ))}
      </ul>
      <button className="w-full py-2 rounded-md bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition">
        Get Started
      </button>
    </motion.div>
  );
}

PricingCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  notIncluded: PropTypes.arrayOf(PropTypes.string),
  highlight: PropTypes.bool,
};

export default function PricingSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Simple, transparent pricing for developers and indie makers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              notIncluded={plan.notIncluded}
              highlight={plan.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}