import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FiMapPin } from "react-icons/fi";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm, Controller } from "react-hook-form";
import { Yard } from "@/types/yard";
import { createYard } from "@/services/yards";
import { useUsers } from "@/states/users"
import { useEffect } from "react";
import { MdAdd } from "react-icons/md";

export default function AddYard() {
  const {
    register,
    handleSubmit,
    control
  } = useForm<Yard>();

  const { users, loadUsers } = useUsers()

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" className="rounded-full p-6 text-2xl">
          <MdAdd size="" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] rounded-lg shadow-xl">
        <DialogHeader className="border-b pb-4">
          <DialogTitle >
            <span>Registrar Nueva Yarda</span>
          </DialogTitle>
          <DialogDescription>Captura yardas que despues sean utilizadas para almacenar los vehiculos. </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-6 px-4">

          <div className="space-y-3">
            <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Estado Actual
            </Label>

            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="h-10 rounded-md border focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                    <SelectValue placeholder="Seleccione un estado" />
                  </SelectTrigger>
                  <SelectContent className="rounded-md border shadow-lg">
                    <SelectGroup>
                      <SelectLabel className="px-3 py-2 text-sm text-gray-500">
                        Estados Disponibles
                      </SelectLabel>
                      <SelectItem
                        value="active"
                        className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
                          <span>Activa</span>
                        </span>
                      </SelectItem>
                      <SelectItem
                        value="inactive"
                        className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-orange-500"></span>
                          <span>Inactiva</span>
                        </span>
                      </SelectItem>
                      <SelectItem
                        value="under_maintenance"
                        className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>
                          <span>En Mantenimiento</span>
                        </span>
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

              )}
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="yardName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Nombre de la Yarda
            </Label>
            <Input
              id="yardName"
              placeholder="Ej: Zona de Almacenamiento Principal"
              className="py-2 px-3 h-10 rounded-md border focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              {...register("name")}
            />
          </div>

          {/* Campo Ubicación */}
          <div className="space-y-3">
            <Label htmlFor="location" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Ubicación
            </Label>
            <div className="relative">
              <Input
                id="location"
                placeholder="Ej: Módulo 5, Sector Industrial Norte"
                className="py-2 px-3 h-10 rounded-md border focus:ring-2 focus:ring-primary focus:border-primary pl-10 transition-colors"
                {...register("location")}
              />
              <FiMapPin className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="maxCapacity" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Capacidad Máxima
            </Label>
            <div className="flex items-center gap-2">
              <Input
                id="maxCapacity"
                placeholder="1500"
                type="number"
                className="py-2 px-3 h-10 rounded-md border focus:ring-2 focus:ring-primary focus:border-primary flex-1 transition-colors"
                {...register("maxCapacity", { valueAsNumber: true })}
              />
              <span className="text-sm text-gray-500 dark:text-gray-400">Carros</span>
            </div>
          </div>


          <div className="space-y-3">
            <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Supervisor de la yarda</Label>

            <Controller
              name="supervisorId"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value?.toString()}
                  onValueChange={(value) => field.onChange(Number(value))}
                >
                  <SelectTrigger className="h-10 rounded-md border focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                    <SelectValue placeholder="Seleccione un supervisor" />
                  </SelectTrigger>

                  <SelectContent className="rounded-md border shadow-lg">
                    <SelectGroup>
                      <SelectLabel className="px-3 py-2 text-sm text-gray-500">
                        Supervisores Disponibles
                      </SelectLabel>

                      {users?.filter(user => user.role === 'supervisor')
                        .map((user) => (
                          <SelectItem
                            key={user.id}
                            value={user.id.toString()}
                            className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                          >
                            <span className="flex items-center gap-2">
                              <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                              <span>{user.firstName}</span>
                            </span>
                          </SelectItem>
                        ))}

                      {users?.length === 0 && (
                        <div className="px-3 py-2 text-sm text-gray-400">
                          No hay supervisores disponibles
                        </div>
                      )}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>

        <DialogFooter className="border-t pt-4 px-4">
          <div className="flex justify-end gap-3 w-full">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="px-6 py-2 rounded-md border hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Cancelar
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="px-6 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors shadow-sm"
              onClick={handleSubmit(createYard)}
            >
              Registrar Yarda

            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
