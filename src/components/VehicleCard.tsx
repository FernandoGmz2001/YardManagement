import { FaCar, FaChevronRight } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

interface CardProps {
  client: string;
  vehicle: string;
  id?: string; // Añadido para construir la ruta dinámica
}
function VehicleCard({ client, vehicle, id = '1' }: CardProps) {

  return (
    <Link
      to={`/vehicle/${id}`} // Ruta dinámica usando el ID
      className="block" // Asegura que el Link ocupe todo el espacio
      aria-label={`Ver detalles de ${vehicle} de ${client}`} // Mejora accesibilidad
    >
      <div className="border border-solid border-[#E9E9E9] p-4 rounded-3xl flex justify-between items-center text-[#333333] hover:bg-gray-50 transition-colors duration-200">
        <div className="flex items-center gap-4">
          <div className="text-2xl p-2 rounded-full bg-gray-100 text-[#2A5CAA]">
            <FaCar aria-hidden="true" />
          </div>
          <div>
            <p className="flex gap-2 items-center text-[#4CAF50]"><FiLogIn /> Entrada</p>
            {/* <p className="flex gap-2 items-center text-[#4CAF50]"><FiLogIn />Salida</p> */}
            <p className="font-medium">{client}</p>
            <p className="font-semibold">{vehicle}</p>
          </div>
        </div>
        <div className="text-gray-400">
          <FaChevronRight aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}

export default VehicleCard;
