import Container from "@/components/Container";
import BatteryReplacement from "@/components/ServiceTiels/BatteryReplacement";

const ServicesSection = () => {
  return (
    <>
      <Container className="my-40">
        <div className="flex items-center justify-between flex-col text-center">
          <h1>
            <span>Services</span> that we provide.
          </h1>
          <p className="max-w-[80ch] mt-10 mb-20">
            We provide various computer repair services and solutions for our
            new and regular customers. Feel free to find out more below.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <BatteryReplacement />
          <div className="bg-light-gray h-[415px] rounded-2xl col-span-6 lg:col-span-5"></div>
          <div className="bg-light-gray h-[415px] rounded-2xl col-span-6 lg:col-span-7"></div>
          <div className="bg-light-gray h-[415px] rounded-2xl col-span-12"></div>
          <div className="bg-light-gray h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
          <div className="bg-light-gray h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
          <div className="bg-light-gray h-[415px] rounded-2xl col-span-12 lg:col-span-4"></div>
        </div>
      </Container>
    </>
  );
};

export default ServicesSection;
