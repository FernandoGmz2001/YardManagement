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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button.tsx"
import PasswordInput from "@/components/comp-23.tsx"
import { UserServices } from "./UserServices.ts"
import { useForm, Controller } from 'react-hook-form'
import { User } from "@/types/user.ts"
import { MdAdd } from "react-icons/md"


function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<User>();
  const { postUser } = UserServices()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" className="rounded-full p-6 text-2xl">
          <MdAdd size="" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" onOpenAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Registrar nuevo usuario</DialogTitle>
          <DialogDescription>Captura un nuevo usuario del sistema. </DialogDescription>
        </DialogHeader>

        <div className="space-y-2 w-full">
          <Label htmlFor="role">Tipo de usuario</Label>
          <Controller
            name="role"
            control={control} // Asegúrate de obtener el control de useForm()
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione un rol" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Niveles de acceso</SelectLabel>
                    <SelectItem value="driver">
                      <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                        Chofer
                      </span>
                    </SelectItem>
                    <SelectItem value="supervisor">
                      <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                        Supervisor
                      </span>
                    </SelectItem>
                    <SelectItem value="admin">
                      <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-red-500"></span>
                        Administrador
                      </span>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.role && (
            <span className="text-sm font-medium text-destructive">
              {errors.role.message}
            </span>
          )}
        </div>

        <div className="grid gap-4 ">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nombre(s)</Label>
              <Input
                id="firstName"
                placeholder="Ej: Juan Carlos"
                autoComplete="given-name"
                {...register("firstName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Apellido paterno</Label>
              <Input
                id="lastName"
                placeholder="Ej: Pérez"
                autoComplete="family-name"
                {...register("lastName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Correo</Label>
              <Input
                id="email"
                placeholder="Ej: usuario@gmail.com"
                autoComplete="additional-name"
                {...register("email")}
              />
            </div>

            <PasswordInput
              type="password"
              name="password"
              register={register}
              error={errors.password}
              placeholder="Ingresa tu contraseña"
              valueAsNumber={false} />
          </div>

        </div>

        <DialogFooter>
          <div className="flex justify-center gap-3">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" onClick={handleSubmit(postUser)}>
              Registrar usuario
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddUser
