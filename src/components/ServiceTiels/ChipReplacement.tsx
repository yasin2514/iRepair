import useScrollGro from "@/hooks/useScrollGro";
import { motion } from "framer-motion";
import bg from "@/assets/images/chip.jpg";

const ChipReplacement = () => {
  const { componentRef, styleLeftTransform } = useScrollGro();
  return (
    <motion.div
      ref={componentRef}
      style={{ ...styleLeftTransform, backgroundImage: `url(${bg})` }}
      className="bg-[#c7c7c7] h-[415px] rounded-2xl col-span-6 lg:col-span-5 bg-cover bg-blend-overlay bg-center bg-no-repeat"
    >
      hedlhfhddfhjiodfhjoidjiodj
    </motion.div>
  );
};

export default ChipReplacement;
