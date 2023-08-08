import { errorMessages, inputLength } from "./../../constants/Constants";
import { IError } from "./../../interface/IError";
import { ILength } from "./../../interface/ILength";
import { IContact } from "../../interface/IContact";
import { regexp } from "../../constants/Constants";


type ValidateFunction = (
  value: string,
  regexp: RegExp,
  length?: ILength
) => string;

export function getDefaultValues(): IError | IContact {
  return {
    name: "",
    email: "",
    mobile: "",
    landline: "",
    website: "",
    address: "",
  };
}

export function validateForm(
  form: IContact,
  validateFunction: ValidateFunction
): IError {
  const error: IError = {
    name: "",
    email: "",
    mobile: "",
    landline: "",
    website: "",
    address: "",
  };

  error.email = validateFunction(form.email, regexp.email);
  error.mobile = validateFunction(form.mobile, regexp.mobile);
  error.website = validateFunction(form.website, regexp.website);
  error.landline = validateFunction(form.landline, regexp.landline);
  error.name = validateFunction(form.name, regexp.name, {
    min: inputLength.name.min,
    max: inputLength.name.max,
  });
  error.address = validateFunction(form.address, regexp.address, {
    min: inputLength.address.min,
    max: inputLength.address.max,
  });

  return error;
}

export function validateInput(
  value: string,
  regexp: RegExp,
  length: ILength | null = null
): string {
  const trimmedValue = value.trim();
  if (trimmedValue === "") return errorMessages.required;

  if (!regexp.test(trimmedValue)) return errorMessages.invalid;

  if (length !== null) {
    const { min, max } = length;
    if (trimmedValue.length < min) return errorMessages.minLength(min);
    if (trimmedValue.length > max) return errorMessages.maxLength(max);
  }

  return "";
}
