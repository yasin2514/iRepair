import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macBook from "@/assets/images/macbook-exposed.png";

const HeroSection = () => {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-64px)] place-content-center">
      <div>
        <h1 className="text-4xl lg:text-8xl font-bold text-nowrap">
          <span className="text-gray">Don't worry.</span>
          <br />
          <span>We'll fix it.</span>
        </h1>
        <p className="text-dark-gray max-w-[50ch] mt-10 mb-6">
          Welcome to <span className="font-semibold text-black"> iRepair</span>,
          your one-stop place for all kinds of
          <span className="font-semibold text-black"> Macbook repairs</span> and
          diagnostics.
        </p>
        <Button>Book a Service</Button>
      </div>
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
