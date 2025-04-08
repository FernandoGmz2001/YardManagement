import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { IoMdAddCircleOutline } from "react-icons/io"
import { Switch } from "@/components/ui/switch"
import { FiEdit } from "react-icons/fi"


interface Props {
  isEdit?: boolean;
}

export default function AddRegister({ isEdit = false }: Props) {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          {isEdit ? (
            <p><FiEdit /></p>) : (
            <Button>
              <IoMdAddCircleOutline className="mr-2" />
              Agregar registro vehicular
            </Button>
          )
          }
        </DialogTrigger>
        <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle>{isEdit ? 'Editar registro de vehículo' : 'Nuevo registro de vehículo'}</DialogTitle>
            <DialogDescription>{isEdit ? 'Edita un vehículo' : 'Registra un vehículo'}</DialogDescription>
            <div className="flex flex-col gap-6 mt-4">
              {/* Sección de información del cliente */}
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="client">Cliente</Label>
                <Input
                  type="text"
                  id="client"
                  placeholder="Ej: Juan Pérez García"
                />
              </div>

              {/* Sección de información del vehículo */}
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="vehicle">Vehículo</Label>
                <Input
                  type="text"
                  id="vehicle"
                  placeholder="Ej: Toyota Corolla 2020"
                />
              </div>

              <div className="grid w-full items-center gap-3">
                <Label htmlFor="vin">Número de serie (VIN)</Label>
                <Input
                  type="text"
                  id="vin"
                  placeholder="Ej: 1HGCM82633A123456"
                />
              </div>

              {/* Selección de título */}
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="title">Color de título</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccione el color del título" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Colores de título</SelectLabel>
                      <SelectItem value="blue">Azul (Título estándar)</SelectItem>
                      <SelectItem value="pink">Rosa (Algunos estados)</SelectItem>
                      <SelectItem value="green">Verde (Vehículo nuevo)</SelectItem>
                      <SelectItem value="yellow">Amarillo (Salvamento)</SelectItem>
                      <SelectItem value="orange">Naranja (Uso especial)</SelectItem>
                      <SelectItem value="red">Rojo (Importado/Regularización)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="keys" />
                <Label htmlFor="keys">¿Incluye llaves?</Label>
              </div>

              {/* Selección de conductor */}
              <div className="grid w-full items-center gap-3">
                <Label>Conductor asignado</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccione un conductor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Conductores disponibles</SelectLabel>
                      <SelectItem value="driver1">Carlos Mendoza Ruiz</SelectItem>
                      <SelectItem value="driver2">Ana Patricia López</SelectItem>
                      <SelectItem value="driver3">Miguel Ángel Torres</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Selección de yarda */}
              <div className="grid w-full items-center gap-3">
                <Label>Ubicación en yarda</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccione una yarda" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Yardas disponibles</SelectLabel>
                      <SelectItem value="yard1">Yarda Norte - Sección A</SelectItem>
                      <SelectItem value="yard2">Yarda Sur - Sección B</SelectItem>
                      <SelectItem value="yard3">Yarda Central - Sección C</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid w-full items-center gap-3">
                <Label htmlFor="comment">Comentario</Label>
                <Input
                  type="text"
                  id="comment"
                  placeholder="Ej: Todo bien"
                />
              </div>
            </div>
          </DialogHeader>
          <DialogFooter>
            <div className="flex justify-end gap-4">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancelar
                </Button>
              </DialogClose>
              <Button type="submit">Guardar registro</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
