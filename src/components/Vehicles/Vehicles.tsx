import { FaChevronLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import VehicleList from './VehicleList'
import { Input } from '../ui/input'
import { FiSearch } from "react-icons/fi";
import Calendar from '@/components/comp-41.tsx'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function Vehicles() {
  return (
    <main className="bg-[#f5f5f5] h-screen flex flex-col gap-6">
      <div className="min-h-[25svh] flex items-start justify-start p-4 gap-2 flex-col ">
        <div className='pb-2'>
          <Link to="/">
            <div className="flex gap-2 items-center underline text-[#2A5CAA]"><FaChevronLeft /> Volver</div>
          </Link>
        </div>
        <div className="relative w-full">
          <Input id="search" className="peer ps-9 bg-white" placeholder="Busca por cliente, modelo o serie" type="text" />
          <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
            <FiSearch />
          </div>
        </div>
        <div className='w-full'>
          <Calendar />
        </div>
        <div className='w-full'>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Seleccione un conductor" />
            </SelectTrigger>
            <SelectContent className='w-full min-w-0'>
              <SelectGroup>
                <SelectLabel>Conductores</SelectLabel>
                <SelectItem value="d1">
                  <p>Roberto Jair Lopez</p>
                </SelectItem>
                <SelectItem value="d2">
                  <p>Roberto Jair Lopez</p>
                </SelectItem>
                <SelectItem value="d3">
                  <p>Roberto Jair Lopez</p>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="bg-white w-full p-8 h-full  rounded-4xl rounded-b-none flex flex-col gap-8 ">
        <VehicleList />
      </div>
    </main>
  )
}

export default Vehicles
