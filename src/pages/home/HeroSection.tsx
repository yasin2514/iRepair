import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macBook from "@/assets/images/macbook-exposed.png";
import { delay, motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 0.5,
    },
  },
};
const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", bounce: 0.5 },
  },
};

const HeroSection = () => {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-64px)] place-content-center">
      <motion.div variants={intro} initial="hidden" animate="visible">
        <motion.h1
          className="text-4xl lg:text-8xl font-bold text-nowrap"
          variants={introChildren}
        >
          <span className="text-gray">Don't worry.</span>
          <br />
          <span>We'll fix it.</span>
        </motion.h1>
        <motion.p
          className="text-dark-gray max-w-[50ch] mt-10 mb-6"
          variants={introChildren}
        >
          Welcome to <span className="font-semibold text-black"> iRepair</span>,
          your one-stop place for all kinds of
          <span className="font-semibold text-black"> MacBook repairs</span> and
          diagnostics.
        </motion.p>
        <motion.div variants={introChildren}>
          <Button>Book a Service</Button>
        </motion.div>
      </motion.div>
      <div className=" w-3/4 md:w-2/4 lg:w-full mx-auto mt-10 lg:mt-0 flex items-center justify-center">
        <img
          className="-rotate-[35deg] h-[90%] object-contain"
          src={macBook}
          alt="macBook"
        />
      </div>
    </Container>
  );
};

export default HeroSection;
