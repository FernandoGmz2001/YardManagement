import { DashboardItem } from '@/components/DashboardItem'
import { FaArrowRight } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import VehicleCard from '@/components/VehicleCard';
import AddUser from '@/components/Home/AddUser';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import AddRegister from '@/components/Home/AddRegister';
import { Link } from 'react-router-dom';
import AddYard from './AddYard';

function Home() {
  return (
    <>
      <main className="bg-[#f5f5f5] h-screen flex flex-col ">
        <div className="h-[15svh] flex items-center justify-end px-4 gap-2">
          <div className='bg-white px-4 flex items-center justify-center w-[55px] h-[55px] rounded-2xl text-2xl'>
            <AddYard />
          </div>
          <div className='bg-white px-4 flex items-center justify-center w-[55px] h-[55px] rounded-2xl text-2xl'>
            <AddUser />
          </div>
          <div className='bg-white px-4 flex items-center justify-center w-[55px] h-[55px] rounded-2xl text-2xl'>
            <Link to="/vehicles">
              <FiSearch />
            </Link>
          </div>
        </div>
        <div className="bg-white w-full p-8 h-full min-h-[90svh] rounded-4xl rounded-b-none flex flex-col gap-8 ">
          <div className='flex flex-col gap-4'>
            <div className='flex gap-4 items-center justify-between'>
              <h3 className='font-bold'>Resumen</h3>
              <Select defaultValue='month'>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecciona un filtro" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fechas</SelectLabel>
                    <SelectItem value="month">Ultimos 30 dias</SelectItem>
                    <SelectItem value="week">Ultimos 7 dias</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='bg-[#f5f5f5] flex gap-4 p-4 rounded-md'>
              <DashboardItem title="Entradas" quantity={12} />
              <DashboardItem title="Salidas" quantity={15} />
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex justify-end'>
              <AddRegister />
            </div>
            <section className='flex gap-4 flex-col'>
              <div className='flex justify-between'>
                <h3 className='font-bold'>Registros recientes</h3>
                <Link to="/vehicles">
                  <p className='underline flex items-center gap-2 text-[#2A5CAA]'>Ver todos <FaArrowRight /></p>
                </Link>
              </div>
              <div className='flex flex-col gap-4'>
                <VehicleCard client="Martin Perez" vehicle='Mazda 6 2013 GT 4 Cil' />
                <VehicleCard client="Martin Perez" vehicle='Mazda 6 2013 GT 4 Cil' />
                <VehicleCard client="Martin Perez" vehicle='Mazda 6 2013 GT 4 Cil' />
                <VehicleCard client="Martin Perez" vehicle='Mazda 6 2013 GT 4 Cil' />
                <VehicleCard client="Martin Perez" vehicle='Mazda 6 2013 GT 4 Cil' />
                <VehicleCard client="Martin Perez" vehicle='Mazda 6 2013 GT 4 Cil' />
                <VehicleCard client="Martin Perez" vehicle='Mazda 6 2013 GT 4 Cil' />
                <VehicleCard client="Martin Perez" vehicle='Mazda 6 2013 GT 4 Cil' />
                <VehicleCard client="Martin Perez" vehicle='Mazda 6 2013 GT 4 Cil' />
              </div>
            </section>
          </div>
        </div>

      </main>
    </>
  )
}

export default Home
