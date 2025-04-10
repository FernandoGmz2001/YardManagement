
import { FiMapPin, FiUser } from 'react-icons/fi'
import { Section } from './components/Section.tsx'
import { IoCarOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";

export default function Configuration() {
  return (
    <div className='p-5 flex flex-col gap-4'>
      <header className='text-2xl font-bold'>Configuracion</header>
      <Section title="Yardas" description='Crea, edita y elimina las ubicaciones donde seran almacenados los autos' icon={
        <FiMapPin />
      } />
      <Section title="Usuarios" description='Crea, edita y elimina usuarios para iniciar sesion en el sistema' icon={
        <FiUser />
      } />
      <Section title="Conductores" description='Crea, edita y elimina conductores encargados de conducir los vehiculos' icon={
        <MdWorkOutline />
      } />
      <Section title="Vehiculos" description='Crea, edita y elimina los vehiculos a cruzar' icon={
        <IoCarOutline />
      } />
    </div>
  )
}

