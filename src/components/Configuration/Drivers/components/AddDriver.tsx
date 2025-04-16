// components/AddDriver.tsx
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm, Controller } from 'react-hook-form'
import { Driver } from "@/types/driver"
import { FiPlus } from "react-icons/fi"
import { useDrivers } from "@/states/drivers"

function AddDriver() {
  const { createDriver } = useDrivers();
  const { register, handleSubmit, control, formState: { errors } } = useForm<Driver>();

  const onSubmit = async (data: Omit<Driver, 'id'>) => {
    await createDriver({
      ...data,
      licenseExpiry: new Date(data.licenseExpiry),
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
          <DialogTitle className="text-xl">Nuevo Conductor</DialogTitle>
          <DialogDescription className="text-base">
            Completa la información del conductor
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {/* Nombre completo */}
            <div className="space-y-3">
              <Label className="text-base" htmlFor="name">
                Nombre completo
              </Label>
              <Input
                id="name"
                className="h-12 text-base px-4"
                placeholder="Ej: Juan Pérez López"
                {...register("name", { required: "Nombre es requerido" })}
              />
              {errors.name && (
                <span className="text-sm text-red-500 mt-1 block">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Número de licencia */}
            <div className="space-y-3">
              <Label className="text-base" htmlFor="licenseNumber">
                Número de licencia
              </Label>
              <Input
                id="licenseNumber"
                className="h-12 text-base px-4"
                placeholder="Ej: ABC-123456"
                {...register("licenseNumber", { required: "Licencia es requerida" })}
              />
              {errors.licenseNumber && (
                <span className="text-sm text-red-500 mt-1 block">
                  {errors.licenseNumber.message}
                </span>
              )}
            </div>

            {/* Teléfono */}
            <div className="space-y-3">
              <Label className="text-base" htmlFor="phone">
                Teléfono
              </Label>
              <Input
                id="phone"
                className="h-12 text-base px-4"
                placeholder="Ej: 555-123-4567"
                {...register("phone", { required: "Teléfono es requerido" })}
              />
              {errors.phone && (
                <span className="text-sm text-red-500 mt-1 block">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* Empresa de transporte */}
            <div className="space-y-3">
              <Label className="text-base" htmlFor="transportCompany">
                Empresa de transporte
              </Label>
              <Input
                id="transportCompany"
                className="h-12 text-base px-4"
                placeholder="Ej: Transportes MX"
                {...register("transportCompany", { required: "Empresa es requerida" })}
              />
              {errors.transportCompany && (
                <span className="text-sm text-red-500 mt-1 block">
                  {errors.transportCompany.message}
                </span>
              )}
            </div>

            {/* Fecha de vencimiento */}
            <div className="space-y-3">
              <Label className="text-base" htmlFor="licenseExpiry">
                Vencimiento de licencia
              </Label>
              <Controller
                name="licenseExpiry"
                control={control}
                rules={{ required: "Fecha requerida" }}
                render={({ field }) => (
                  <Input
                    type="date"
                    className="h-12 text-base px-4"
                    {...field}
                    value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
                  />
                )}
              />
              {errors.licenseExpiry && (
                <span className="text-sm text-red-500 mt-1 block">
                  {errors.licenseExpiry.message}
                </span>
              )}
            </div>
          </div>

          <DialogFooter className="mt-6">
            <div className="flex flex-col gap-3 w-full">
              <Button
                type="submit"
                className="h-12 text-base font-semibold"
              >
                Registrar Conductor
              </Button>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="h-12 text-base"
                >
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

export default AddDriver;
