import useScrollGro from "@/hooks/useScrollGro";
import { motion } from "framer-motion";
const BatteryReplacement = () => {
  const { componentRef, style } = useScrollGro();
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-gray h-[415px] rounded-2xl col-span-12"
    ></motion.div>
  );
};

export default BatteryReplacement;
