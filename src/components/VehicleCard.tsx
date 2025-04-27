import { FaChevronRight } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

interface CardProps {
  client: string;
  vehicle: string;
  id?: string;
}

function VehicleCard({ client, vehicle, id = "1" }: CardProps) {
  return (
    <Link
      to={`/vehicle/${id}`}
      className="block group active:scale-[0.98] transition-transform duration-150"
      aria-label={`Ver detalles de ${vehicle} de ${client}`}
    >
      <div className="border border-gray-200 p-4 rounded-2xl flex justify-between items-center bg-white shadow-sm active:shadow-xs transition-all duration-150">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="flex flex-col flex-1 min-w-0">
            <div className="mb-1.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium">
                <FiLogIn className="text-sm flex-shrink-0" />
                <span className="truncate">Entrada</span>
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-gray-500 text-sm font-medium truncate">
                {client}
              </p>
              <h3 className="text-gray-900 text-lg font-bold truncate">
                {vehicle}
              </h3>
            </div>

            <div className="mt-2">
              <span className="text-gray-400 text-xs">14:30 • 15 Mar 2024</span>
            </div>
          </div>

          <div className="text-gray-300 ml-2 transition-colors flex-shrink-0">
            <FaChevronRight className="text-xl" aria-hidden="true" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VehicleCard;
