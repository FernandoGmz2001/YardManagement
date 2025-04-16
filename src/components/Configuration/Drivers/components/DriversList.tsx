// components/DriversList.tsx
import { FiTruck, FiPhone, FiCalendar, FiBriefcase, FiCheckCircle, FiAlertTriangle } from "react-icons/fi";
import { FaRegAddressCard } from "react-icons/fa";
import { Driver } from "@/types/driver";

interface DriverCardProps {
  driver: Driver;
}

function DriverCard({ driver }: DriverCardProps) {
  const isLicenseExpired = new Date(driver.licenseExpiry) < new Date();

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm mb-4 transition-all hover:shadow-md border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <FiTruck className="text-2xl text-blue-500" />
          <h3 className="font-semibold text-lg">{driver.name}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm flex items-center ${isLicenseExpired ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
          }`}>
          {isLicenseExpired ? <FiAlertTriangle className="mr-2" /> : <FiCheckCircle className="mr-2" />}
          {isLicenseExpired ? 'Licencia vencida' : 'Licencia vigente'}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
        <div className="flex items-center">
          <FaRegAddressCard className="mr-2 text-gray-400" />
          <span>{driver.licenseNumber}</span>
        </div>

        <div className="flex items-center">
          <FiPhone className="mr-2 text-gray-400" />
          <span>{driver.phone}</span>
        </div>

        <div className="flex items-center col-span-2">
          <FiBriefcase className="mr-2 text-gray-400" />
          <span>{driver.transportCompany}</span>
        </div>

        <div className="flex items-center">
          <FiCalendar className="mr-2 text-gray-400" />
          <span>Expira: {new Date(driver.licenseExpiry).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

interface DriversListProps {
  drivers: Driver[];
}

export function DriversList({ drivers }: DriversListProps) {
  return (
    <div className="mt-4 space-y-3">
      {drivers.map((driver) => (
        <DriverCard key={driver.id} driver={driver} />
      ))}
    </div>
  );
}
