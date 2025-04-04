import { FieldError, UseFormRegister } from "react-hook-form";
import { User } from "./user";

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<User>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

