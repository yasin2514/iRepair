import Container from "@/components/Container";
import BatteryReplacement from "@/components/ServiceTiels/BatteryReplacement";
import ChipReplacement from "@/components/ServiceTiels/ChipReplacement";
import DataRecovery from "@/components/ServiceTiels/DataRecovery";
import FreeDiagnostics from "@/components/ServiceTiels/FreeDiagnostics";
import RemoteSupport from "@/components/ServiceTiels/RemoteSupport";
import SameDay from "@/components/ServiceTiels/SameDay";
import StorageReplacement from "@/components/ServiceTiels/StorageReplacement";

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
          <ChipReplacement />
          <DataRecovery />
          <StorageReplacement />
          <SameDay />
          <FreeDiagnostics />
          <RemoteSupport />
        </div>
      </Container>
    </>
  );
};

export default ServicesSection;
