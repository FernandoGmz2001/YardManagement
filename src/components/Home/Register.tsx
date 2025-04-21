// src/pages/Register.tsx
import { useForm, Controller } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Header from "@/components/Configuration/components/Header";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { useMovements } from '@/states/movements';
import { Movement } from '@/types/movement';

export default function Register() {
  const navigate = useNavigate();
  const { createMovement } = useMovements();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Movement>({
    defaultValues: {
      type: 'entry',
      reason: 'load',
      vehicle: {
        id: 0,
        data: {
          plate: '',
          serialNumber: '',
          keysDelivered: false,
          vin: '',
          type: 'truck'
        }
      },
      driverId: 1,
      yardId: 1,
      capturedById: 1
    }
  });

  const onSubmit = async (data: Movement) => {
    try {
      await createMovement(data);
      navigate('/');
    } catch (error) {
      console.error('Error al registrar movimiento:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 py-6 px-6">
      <Header
        title=""
        returnUrl="/"
      />

      <div className="flex flex-col gap-6 mt-4">
        <h2 className="font-bold text-2xl">Registro de nuevo vehículo</h2>

        {/* Tipo de registro */}
        <div className="grid w-full items-center gap-3">
          <Label>Tipo de registro</Label>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccione el tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tipos de registro</SelectLabel>
                    <SelectItem value="entry">Entrada</SelectItem>
                    <SelectItem value="exit">Salida</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.type && (
            <span className="text-sm font-medium text-destructive">
              {errors.type.message}
            </span>
          )}
        </div>

        {/* Razón */}
        <div className="grid w-full items-center gap-3">
          <Label>Razón</Label>
          <Controller
            name="reason"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccione la razón" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Razones</SelectLabel>
                    <SelectItem value="load">Carga</SelectItem>
                    <SelectItem value="unload">Descarga</SelectItem>
                    <SelectItem value="maintenance">Mantenimiento</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.reason && (
            <span className="text-sm font-medium text-destructive">
              {errors.reason.message}
            </span>
          )}
        </div>

        {/* Sección de información del vehículo */}
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="plate">Placa</Label>
          <Input
            id="plate"
            placeholder="Ej: ABC-123"
            {...register("vehicle.data.plate", { required: "La placa es requerida" })}
          />
          {errors.vehicle?.data?.plate && (
            <span className="text-sm font-medium text-destructive">
              {errors.vehicle.data.plate.message}
            </span>
          )}
        </div>

        <div className="grid w-full items-center gap-3">
          <Label htmlFor="serialNumber">Número de serie</Label>
          <Input
            id="serialNumber"
            placeholder="Ej: SN-2024"
            {...register("vehicle.data.serialNumber", { required: "El número de serie es requerido" })}
          />
          {errors.vehicle?.data?.serialNumber && (
            <span className="text-sm font-medium text-destructive">
              {errors.vehicle.data.serialNumber.message}
            </span>
          )}
        </div>

        <div className="grid w-full items-center gap-3">
          <Label htmlFor="vin">VIN</Label>
          <Input
            id="vin"
            placeholder="Ej: 1HGBH41JXMN109186"
            {...register("vehicle.data.vin", {
              required: "El VIN es requerido",
              minLength: {
                value: 17,
                message: "El VIN debe tener 17 caracteres"
              },
              maxLength: {
                value: 17,
                message: "El VIN debe tener 17 caracteres"
              }
            })}
          />
          {errors.vehicle?.data?.vin && (
            <span className="text-sm font-medium text-destructive">
              {errors.vehicle.data.vin.message}
            </span>
          )}
        </div>

        <div className="grid w-full items-center gap-3">
          <Label>Tipo de vehículo</Label>
          <Controller
            name="vehicle.data.type"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccione el tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tipos de vehículo</SelectLabel>
                    <SelectItem value="truck">Camión</SelectItem>
                    <SelectItem value="car">Automóvil</SelectItem>
                    <SelectItem value="motorcycle">Motocicleta</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Controller
            name="vehicle.data.keysDelivered"
            control={control}
            render={({ field }) => (
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
          />
          <Label htmlFor="keysDelivered">¿Llaves entregadas?</Label>
        </div>

        {/* Selección de conductor */}
        <div className="grid w-full items-center gap-3">
          <Label>Conductor</Label>
          <Controller
            name="driverId"
            control={control}
            render={({ field }) => (
              <Select onValueChange={(value) => field.onChange(Number(value))} value={field.value.toString()}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccione un conductor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Conductores</SelectLabel>
                    <SelectItem value="1">Carlos Mendoza Ruiz</SelectItem>
                    <SelectItem value="2">Ana Patricia López</SelectItem>
                    <SelectItem value="3">Miguel Ángel Torres</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.driverId && (
            <span className="text-sm font-medium text-destructive">
              {errors.driverId.message}
            </span>
          )}
        </div>

        {/* Selección de yarda */}
        <div className="grid w-full items-center gap-3">
          <Label>Yarda</Label>
          <Controller
            name="yardId"
            control={control}
            render={({ field }) => (
              <Select onValueChange={(value) => field.onChange(Number(value))} value={field.value.toString()}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccione una yarda" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Yardas</SelectLabel>
                    <SelectItem value="1">Yarda Norte</SelectItem>
                    <SelectItem value="2">Yarda Sur</SelectItem>
                    <SelectItem value="3">Yarda Central</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.yardId && (
            <span className="text-sm font-medium text-destructive">
              {errors.yardId.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-4 w-full">
          <Button
            type="button"
            variant="secondary"
            className="w-full"
            onClick={() => navigate('/')}
          >
            Cancelar
          </Button>
          <Button type="submit" className="w-full">
            Guardar registro
          </Button>
        </div>
      </div>
    </form>
  );
}
