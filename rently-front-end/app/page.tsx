import { Header } from "@/components/component/header";
import HomeBanner from "@/components/homeBanner/HomeBanner";
import VehicleFleet from "@/components/vehicleFleet";

export default function Home() {
  return (
    <>
      <HomeBanner />

      <VehicleFleet />
    </>
  );
}
