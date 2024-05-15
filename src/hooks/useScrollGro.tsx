import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrollGro = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1 1"],
  });

  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const xLeftValues = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const xRightValues = useTransform(scrollYProgress, [0, 1], [500, 0]);

  const styleScale = {
    scale: scaleValues,
    opacity: opacityValues,
  };
  const styleLeftTransform = {
    scale: scaleValues,
    opacity: opacityValues,
    x: xLeftValues,
  };
  const styleRightTransform = {
    scale: scaleValues,
    opacity: opacityValues,
    x: xRightValues,
  };
  return { componentRef, styleScale, styleLeftTransform, styleRightTransform };
};

export default useScrollGro;
