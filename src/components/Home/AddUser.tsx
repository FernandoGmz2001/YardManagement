import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import { BsPersonAdd } from "react-icons/bs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button"

function AddUser() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="text-4xl">
          <BsPersonAdd className="h-5 w-5" size={24} />
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" onOpenAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Registrar nuevo usuario</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* Información personal */}
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nombre(s)</Label>
              <Input
                id="firstName"
                placeholder="Ej: Juan Carlos"
                autoComplete="given-name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Apellido paterno</Label>
              <Input
                id="lastName"
                placeholder="Ej: Pérez"
                autoComplete="family-name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mothersMaidenName">Apellido materno</Label>
              <Input
                id="mothersMaidenName"
                placeholder="Ej: Rodríguez"
                autoComplete="additional-name"
              />
            </div>
          </div>

          <div className="space-y-2 w-full">
            <Label htmlFor="role">Tipo de usuario</Label>
            <Select>
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
          </div>
        </div>

        <DialogFooter>
          <div className="flex justify-center gap-3">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" >
              Registrar usuario
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddUser
