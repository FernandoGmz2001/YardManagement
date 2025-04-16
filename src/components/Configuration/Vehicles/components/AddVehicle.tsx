import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from 'react-hook-form';
import { Vehicle } from "@/types/vehicle";
import { FiPlus } from "react-icons/fi";
import { Switch } from "@/components/ui/switch";
import { useVehicles } from "@/states/vehicles";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function AddVehicle() {
  const { createVehicle } = useVehicles();
  const { register, handleSubmit, control, formState: { errors } } = useForm<Vehicle>();

  const onSubmit = async (data: Omit<Vehicle, 'id'>) => {
    await createVehicle({
      ...data,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" className="rounded-full p-5 text-lg">
          <FiPlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90vw] max-w-[95vw] rounded-xl">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl">Nuevo Vehículo</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {/* Placa */}
            <div className="space-y-3">
              <Label className="text-base">Placa</Label>
              <Input
                className="h-12 text-base px-4"
                placeholder="Ej: ABC-123"
                {...register("plate", { required: "Placa es requerida" })}
              />
              {errors.plate && <span className="text-red-500 text-sm">{errors.plate.message}</span>}
            </div>

            {/* Número de serie */}
            <div className="space-y-3">
              <Label className="text-base">Número de serie</Label>
              <Input
                className="h-12 text-base px-4"
                {...register("serialNumber", { required: "Número de serie es requerido" })}
              />
              {errors.serialNumber && <span className="text-red-500 text-sm">{errors.serialNumber.message}</span>}
            </div>

            {/* VIN */}
            <div className="space-y-3">
              <Label className="text-base">VIN</Label>
              <Input
                className="h-12 text-base px-4"
                {...register("vin", { required: "VIN es requerido" })}
              />
              {errors.vin && <span className="text-red-500 text-sm">{errors.vin.message}</span>}
            </div>

            {/* Tipo de vehículo */}
            <div className="space-y-3">
              <Label className="text-base">Tipo de vehículo</Label>
              <Controller
                name="type"
                control={control}
                rules={{ required: "Selecciona un tipo de vehículo" }}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Selecciona un tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Tipos de vehículo</SelectLabel>
                        <SelectItem value="truck">
                          <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                            Camión
                          </span>
                        </SelectItem>
                        <SelectItem value="trailer">
                          <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                            Remolque
                          </span>
                        </SelectItem>
                        <SelectItem value="car">
                          <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                            Automóvil
                          </span>
                        </SelectItem>
                        <SelectItem value="machinery">
                          <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-red-500"></span>
                            Maquinaria
                          </span>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.type && <span className="text-red-500 text-sm">{errors.type.message}</span>}
            </div>

            {/* Llaves entregadas */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <Label className="text-base">Llaves entregadas</Label>
              <Controller
                name="keysDelivered"
                control={control}
                render={({ field }) => (
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
            </div>
          </div>

          <DialogFooter className="mt-6">
            <div className="flex flex-col gap-3 w-full">
              <Button type="submit" className="h-12 text-base font-semibold">
                Registrar Vehículo
              </Button>
              <DialogTrigger asChild>
                <Button variant="outline" className="h-12 text-base">
                  Cancelar
                </Button>
              </DialogTrigger>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
