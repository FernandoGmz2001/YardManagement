import { useId, useState } from "react"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormFieldProps } from "@/types/form"

const PasswordInput: React.FC<FormFieldProps> = ({
  register,
  error,
}) => {
  const id = useId()
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible((prev) => !prev)

  return (
    <div className="space-y-2 w-full">
      <Label htmlFor={id}>Contraseña</Label>
      <div className="relative">
        <Input
          id={id}
          type="password"
          placeholder="Contraseña"
          className="pr-10"
          autoComplete="current-password"
          {...register('password')} // Corregido: solo se pasa el nombre
        />
        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          aria-label={isVisible ? "Ocultar contraseña" : "Mostrar contraseña"}
        >
          {isVisible ? (
            <EyeOffIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </button>
      </div>
      {error && (
        <span className="text-sm font-medium text-destructive">
          {error.message}
        </span>
      )}
    </div>
  )
}

export default PasswordInput
