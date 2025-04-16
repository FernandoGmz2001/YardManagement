import { Vehicle } from "@/types/vehicle";
import { VehicleCard } from "./VehicleCard";

interface VehicleListProps {
  vehicles: Vehicle[];
}

export function VehicleList({ vehicles }: VehicleListProps) {
  return (
    <div className="mt-4 space-y-3">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
}
