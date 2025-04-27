import { DashboardItem } from "@/components/DashboardItem";
import { FiSearch } from "react-icons/fi";
import VehicleCard from "@/components/VehicleCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import BottomBar from "../BottomBar";
import { MdAdd } from "react-icons/md";
import { Button } from "../ui/button";

function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col relative">
        <div className="bg-[#F7F7F7] pb-40 w-full p-8 h-full min-h-[90svh]  rounded-b-none flex flex-col gap-8 ">
          <Link to="/vehicles">
            <div className="relative w-full">
              <Input
                id="search"
                className="peer ps-12 bg-white border-none rounded-full px-5 py-4 h-full"
                placeholder="Busca un registro"
                type="text"
              />
              <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-4 peer-disabled:opacity-50 text-2xl">
                <FiSearch />
              </div>
            </div>
          </Link>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center justify-between">
              <h3 className="font-bold text-2xl">Resumen</h3>
              <Select defaultValue="month">
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
            <div className=" flex gap-4 p-4 rounded-md">
              <DashboardItem title="Entradas" quantity={12} />
              <DashboardItem title="Salidas" quantity={15} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {/* <div className='flex justify-end'> */}
            {/*   <AddRegister /> */}
            {/* </div> */}
            <section className="flex gap-4 flex-col">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-2xl rounded-full">
                  Registros recientes
                </h3>
                <Link to="/register/new">
                  <Button size="icon" className="rounded-full p-6">
                    <MdAdd size="" />
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <VehicleCard
                  client="Martin Perez"
                  vehicle="Mazda 6 2013 GT 4 Cil"
                />
                <VehicleCard
                  client="Martin Perez"
                  vehicle="Mazda 6 2013 GT 4 Cil"
                />
                <VehicleCard
                  client="Martin Perez"
                  vehicle="Mazda 6 2013 GT 4 Cil"
                />
                <VehicleCard
                  client="Martin Perez"
                  vehicle="Mazda 6 2013 GT 4 Cil"
                />
                <VehicleCard
                  client="Martin Perez"
                  vehicle="Mazda 6 2013 GT 4 Cil"
                />
                <VehicleCard
                  client="Martin Perez"
                  vehicle="Mazda 6 2013 GT 4 Cil"
                />
                <VehicleCard
                  client="Martin Perez"
                  vehicle="Mazda 6 2013 GT 4 Cil"
                />
                <VehicleCard
                  client="Martin Perez"
                  vehicle="Mazda 6 2013 GT 4 Cil"
                />
                <VehicleCard
                  client="Martin Perez"
                  vehicle="Mazda 6 2013 GT 4 Cil"
                />
              </div>
            </section>
          </div>
        </div>
        <BottomBar />
      </main>
    </>
  );
}

export default Home;
