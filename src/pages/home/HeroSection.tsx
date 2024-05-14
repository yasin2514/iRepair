import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <Container>
      <div>
        <h1>
          <span>Don't worry.</span>
          <br />
          <span>We'll fix it.</span>
        </h1>
        <p>
          Welcome to <span>iRepair</span>, your one-stop place for all kinds of
          <span>Macbook repairs</span> and diagnostics.
        </p>
        <Button>Book a Service</Button>
      </div>
      <div></div>
    </Container>
  );
};

export default HeroSection;
