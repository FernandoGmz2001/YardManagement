import { Status, Yard } from "@/types/yard";
import {
  FiCheckCircle,
  FiSlash,
  FiTool,
  FiMapPin,
  FiTruck,
  FiUser,
  FiCalendar,
  FiRefreshCw
} from "react-icons/fi";

interface YardCardProps {
  yard: Yard;
}

function translateStatus(status: Status): string {
  const statusMap: Record<Status, string> = {
    [Status.active]: 'Activo',
    [Status.inactive]: 'Inactivo',
    [Status.under_maintenance]: 'Mantenimiento'
  };
  return statusMap[status] || 'Desconocido';
}

export default function YardCard({ yard }: YardCardProps) {
  const statusConfig = {
    [Status.active]: {
      color: 'bg-green-100 text-green-800',
      icon: <FiCheckCircle className="w-4 h-4 mr-1" />
    },
    [Status.inactive]: {
      color: 'bg-red-100 text-red-800',
      icon: <FiSlash className="w-4 h-4 mr-1" />
    },
    [Status.under_maintenance]: {
      color: 'bg-yellow-100 text-yellow-800',
      icon: <FiTool className="w-4 h-4 mr-1" />
    }
  }[yard.status];

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm mb-4 transition-all hover:shadow-md">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-lg flex items-center">
          {yard.name}
        </h3>
        <span className={`px-2 py-1 rounded-full text-xs flex items-center ${statusConfig.color}`}>
          {statusConfig.icon}
          {translateStatus(yard.status)}
        </span>
      </div>

      <div className="text-sm text-gray-600 mb-2 space-y-2">
        <div className="flex items-center">
          <FiMapPin className="mr-2 text-blue-500" />
          <p>{yard.location}</p>
        </div>
        <div className="flex items-center">
          <FiTruck className="mr-2 text-gray-400" />
          <p>Capacidad: {yard.maxCapacity} Carros</p>
        </div>
      </div>

      <div className="border-t pt-2">
        <div className="flex items-center mb-1">
          <FiUser className="mr-2 text-gray-400" />
          <div>
            <p className="text-xs text-gray-500">Supervisor:</p>
            <p className="text-sm">{yard.supervisor?.firstName} {yard?.supervisor?.lastName}</p>
            <p className="text-xs text-gray-500">{yard?.supervisor?.email}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-3 text-xs text-gray-400">
        <div className="flex items-center">
          <FiCalendar className="mr-1" />
          <span>Creado: {new Date(yard.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center">
          <FiRefreshCw className="mr-1" />
          <span>Actualizado: {new Date(yard.updatedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
