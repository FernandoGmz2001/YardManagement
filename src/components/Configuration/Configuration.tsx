// Configuration.tsx
import { Link } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'
import { Section } from './components/Section.tsx'
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineDriveEta } from "react-icons/md";
import { LuWarehouse } from "react-icons/lu";

export default function Configuration() {
  return (
    <div className='p-4 flex flex-col gap-3'>
      <header className='text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100'>
        Configuración
      </header>

      <div className="space-y-2">
        <Link to="yards" className="block group">
          <Section
            title="Yardas"
            description='Administra las ubicaciones de almacenamiento de vehículos'
            icon={<LuWarehouse className="text-white" />}
            iconBg="bg-blue-500"
          />
        </Link>

        <Link to="users" className="block group">
          <Section
            title="Usuarios"
            description='Gestiona accesos y permisos del sistema'
            icon={<FiUser className="text-white" />}
            iconBg="bg-green-500"
          />
        </Link>

        <Link to="drivers" className="block group">
          <Section
            title="Conductores"
            description='Administra información de conductores'
            icon={<MdOutlineDriveEta className="text-white" />}
            iconBg="bg-purple-500"
          />
        </Link>

        <Link to="vehicles" className="block group">
          <Section
            title="Vehículos"
            description='Gestiona el inventario de vehículos'
            icon={<IoCarSportOutline className="text-white" />}
            iconBg="bg-orange-500"
          />
        </Link>
      </div>
    </div>
  )
}
