import { motion } from "streamui-deps";

const Loader = ({ children = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-2">
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="h-3 w-3 rounded-full bg-gradient-to-br from-neutral-100 to-neutral-500"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      {children && <p className="text-sm font-poppins text-black dark:text-white">{children}</p>}
    </div>
  );
};

export default Loader;