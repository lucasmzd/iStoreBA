import {
  IErrorProps,
  ILoginProps,
  IRegisterErrors,
  IRegisterProps,
} from "../interfaces/types";

export function validateLoginForm(values: ILoginProps) {
  const errors: IErrorProps = {};
  if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
}

export function validateRegisterForm(values: IRegisterProps) {
  const errors: IRegisterErrors = {};
  if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
}
