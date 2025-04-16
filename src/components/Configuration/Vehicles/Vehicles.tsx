import { Input } from "@/components/ui/input";
import Header from "../components/Header";
import { FiSearch } from "react-icons/fi";
import { useEffect } from "react";
import { useVehicles } from "@/states/vehicles";
import { VehicleList } from "./components/VehicleList";
import { AddVehicle } from "./components/AddVehicle";

export default function Vehicles() {
  const { vehicles, loadVehicles } = useVehicles();

  useEffect(() => {
    loadVehicles();
  }, []);

  return (
    <div className="flex flex-col gap-4 py-6 px-6">
      <Header
        title="Vehículos"
        returnUrl="/settings"
        CreateDialog={AddVehicle}
      />

      <div className="relative w-full">
        <Input
          id="search"
          className="peer ps-12 bg-white border-none rounded-full px-5 py-4 h-full"
          placeholder="Buscar vehículo"
          type="text"
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-4 peer-disabled:opacity-50 text-2xl">
          <FiSearch />
        </div>
      </div>

      <VehicleList vehicles={vehicles} />
    </div>
  );
}
