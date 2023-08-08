import { IRegExp } from "../interface/IRegexp";

export const regexp: IRegExp = {
  email: /^[a-zA-Z\d]*@gmail.com$/,
  website: /^www\.[a-zA-Z\d]*\.com$/,
  name: /^[a-zA-Z\s]*$/,
  mobile: /^[0-9]{10}$/,
  landline: /^[0-9]{10}$/,
  address: /^[a-zA-Z\d\s-,]*$/,
};

export const errorMessages = {
  required: "The field is required.",
  invalid: "The input provided is not valid.",
  minLength: (minValue: number) => `Minimum required length is ${minValue}`,
  maxLength: (maxValue: number) => `Maximum possible length is ${maxValue}`,
};

export const inputLength = {
  name: {
    min: 2,
    max: 50,
  },

  address: {
    min: 15,
    max: 150,
  },
};
