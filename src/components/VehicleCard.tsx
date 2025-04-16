import { FaChevronRight } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

interface CardProps {
  client: string;
  vehicle: string;
  id?: string;
}

function VehicleCard({ client, vehicle, id = '1' }: CardProps) {
  return (
    <Link
      to={`/vehicle/${id}`}
      className="block group transition-all duration-200 hover:scale-[1.02]"
      aria-label={`Ver detalles de ${vehicle} de ${client}`}
    >
      <div className="border border-gray-100 p-6 rounded-xl flex justify-between items-center bg-white shadow-sm hover:shadow-md transition-all duration-200">
        <div className="flex items-center gap-5">
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium">
                <FiLogIn className="text-base" />
                Entrada
              </span>
            </div>

            <div className="space-y-1">
              <p className="text-gray-500 text-sm font-medium">{client}</p>
              <h3 className="text-gray-900 text-xl font-semibold">{vehicle}</h3>
            </div>

            <div className="mt-3">
              <span className="text-gray-400 text-sm">14:30 • 15 Mar 2024</span>
            </div>
          </div>
        </div>

        <div className="text-gray-300 group-hover:text-gray-400 transition-colors">
          <FaChevronRight className="text-2xl" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}

export default VehicleCard;
