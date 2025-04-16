// pages/Drivers.tsx
import { Input } from "@/components/ui/input";
import Header from "../components/Header";
import { FiSearch } from "react-icons/fi";
import { useEffect } from "react";
import { useDrivers } from "@/states/drivers";
import AddDriver from "./components/AddDriver";
import { DriversList } from "./components/DriversList";

export default function Drivers() {
  const { drivers, loadDrivers } = useDrivers();

  useEffect(() => {
    loadDrivers();
  }, []);

  return (
    <div className="flex flex-col gap-4 py-6 px-6">
      <Header
        title="Conductores"
        returnUrl="/settings"
        CreateDialog={AddDriver}
      />

      <div className="relative w-full">
        <Input
          id="search"
          className="peer ps-12 bg-white border-none rounded-full px-5 py-4 h-full"
          placeholder="Busca un conductor"
          type="text"
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-4 peer-disabled:opacity-50 text-2xl">
          <FiSearch />
        </div>
      </div>

      <DriversList drivers={drivers} />
    </div>
  );
}
