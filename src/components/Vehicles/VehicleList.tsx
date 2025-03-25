import VehicleCard from "../VehicleCard"

function VehicleList() {
  return (
    <main className="flex flex-col gap-4">
      <h2 className="font-bold">Registros</h2>
      <div className="flex flex-col gap-2">
        <VehicleCard client="Martin Perez" vehicle='Mazda 6 2013 GT 4 Cil' />
        <VehicleCard client="Martin Perez" vehicle='Mazda 6 2013 GT 4 Cil' />
        <VehicleCard client="Martin Perez" vehicle='Mazda 6 2013 GT 4 Cil' />
        <VehicleCard client="Martin Perez" vehicle='Mazda 6 2013 GT 4 Cil' />
        <VehicleCard client="Martin Perez" vehicle='Mazda 6 2013 GT 4 Cil' />
        <VehicleCard client="Martin Perez" vehicle='Mazda 6 2013 GT 4 Cil' />
      </div>
    </main>
  )
}

export default VehicleList 
