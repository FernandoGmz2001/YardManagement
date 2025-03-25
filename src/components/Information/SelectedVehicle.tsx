import { FaChevronLeft } from "react-icons/fa6"
import { FiUser } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { LuKeySquare } from "react-icons/lu";
import { MdContentCopy } from "react-icons/md";
import { Link } from "react-router-dom"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import InfoCard from "./InfoCard";
import { useState } from "react";
import Comments from "./Comments";

function SelectedVehicle() {
  const [activeTab, setActiveTab] = useState('information');

  return (
    <div>
      <main className="bg-[#f5f5f5] h-screen flex flex-col ">
        <div className="min-h-[10svh] flex items-start justify-start p-4 gap-2 flex-col ">
          <div className=''>
            <Link to="/">
              <div className="flex gap-2 items-center underline text-[#2A5CAA]"><FaChevronLeft /> Volver</div>
            </Link>
          </div>
          <div className="relative w-full">
          </div>
        </div>
        <div className="relative bg-white w-full h-full rounded-t-[2rem] overflow-hidden">
          {activeTab === 'information' && (
            <div className="absolute bottom-0 left-0 w-full h-[300px] md:h-[280px]">
              <svg
                viewBox="0 0 393 281"
                className="w-full h-full"
                preserveAspectRatio="xMidYMin slice" // Mantiene relación de aspecto cortando excedentes
              >
                <path
                  d="M0 97.8136C143.568 24.9487 393 0.4646 393 0.4646V426.965H0V97.8136Z"
                  className="text-[#226FFF] fill-current" // Color original exacto
                />
              </svg>
            </div>
          )}
          <div className="relative z-10 p-8 h-full">
            <Tabs defaultValue="information" className="h-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="information">Informacion</TabsTrigger>
                <TabsTrigger value="comments">Comentarios</TabsTrigger>
              </TabsList>
              <TabsContent value="information">
                <h2 className="font-bold">Martin Perez</h2>
                <div className="flex flex-col">
                  <div className="flex gap-1">
                    <p>Mazda 6 2013 GT 4 Cil /</p>
                    <p className="">Titulo azul</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="">KA987123JKHNADSFHJK</p>
                    <MdContentCopy />
                  </div>
                  <div className="pt-4 grid grid-cols-2 gap-2">
                    <InfoCard
                      title="Tiene llaves?"
                      description="Si"
                      icon={LuKeySquare} // Pasa el componente, no JSX
                    />
                    <InfoCard
                      title="Fecha de cruce"
                      description="25 de Julio, 2025"
                      icon={FiCalendar} // Pasa el componente, no JSX
                    />
                    <InfoCard
                      title="Conductor"
                      description="Roberto Jair"
                      icon={FiUser} // Pasa el componente, no JSX
                    />
                    <InfoCard
                      title="Yarda"
                      description="Lote 5, Colonia la Fe"
                      icon={FiMapPin} // Pasa el componente, no JSX
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center  mt-6 rounded-2xl">
                  <div className="w-[300px] h-[300px] rounded-2xl shadow-2xl">
                    <img src="https://join.travelmanagers.com.au/wp-content/uploads/2017/09/default-placeholder-300x300.png" className="w-full h-full object-fill rounded-2xl" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="comments">
                <Comments />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SelectedVehicle
