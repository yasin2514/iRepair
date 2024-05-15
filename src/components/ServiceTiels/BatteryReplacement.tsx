import useScrollGro from "@/hooks/useScrollGro";
import { motion } from "framer-motion";
import bgImages from "@/assets/images/trackpad.png";
const BatteryReplacement = () => {
  const { componentRef, styleScale } = useScrollGro();
  return (
    <motion.div
      style={{ ...styleScale, backgroundImage: `url(${bgImages})` }}
      ref={componentRef}
      className="bg-light-gray h-[415px] rounded-2xl col-span-12 bg-no-repeat bg-contain bg-right"
    ></motion.div>
  );
};

export default BatteryReplacement;
