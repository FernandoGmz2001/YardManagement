import { FiKey, FiHash, FiCalendar, FiRefreshCw } from "react-icons/fi";
import { Vehicle } from "@/types/vehicle";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm mb-4 transition-all hover:shadow-md border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          {/* <FiCar className="text-2xl text-blue-500" /> */}
          <h3 className="font-semibold text-lg">{vehicle.plate}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm flex items-center ${vehicle.keysDelivered ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
          <FiKey className="mr-2" />
          {vehicle.keysDelivered ? 'Llaves entregadas' : 'Llaves pendientes'}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
        <div className="flex items-center">
          <FiHash className="mr-2 text-gray-400" />
          <span>{vehicle.serialNumber}</span>
        </div>

        <div className="flex items-center">
          <FiHash className="mr-2 text-gray-400" />
          <span>{vehicle.vin}</span>
        </div>

        <div className="flex items-center col-span-2">
          <span className="bg-gray-100 px-2 py-1 rounded-md text-sm">
            Tipo: {vehicle.type}
          </span>
        </div>

        <div className="flex items-center">
          <FiCalendar className="mr-2 text-gray-400" />
          <span>Creado: {new Date(vehicle.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center">
          <FiRefreshCw className="mr-2 text-gray-400" />
          <span>Actualizado: {new Date(vehicle.updatedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
