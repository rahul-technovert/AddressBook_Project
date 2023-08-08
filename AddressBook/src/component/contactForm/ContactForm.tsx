import { FormEvent, useEffect, useState } from "react";
import { IContact } from "../../interface/IContact";
import { Input } from "../common/input/Input";
import {
  validateForm,
  validateInput,
  getDefaultValues,
} from "../utils/utilityMethods";
import { IError } from "../../interface/IError";
import { regexp } from "../../constants/Constants";
import "./contactForm.scss";

interface IProps {
  onCloseForm: () => void;
  onSubmit: (contact: IContact) => void;
  contact: IContact | null;
}
export const ContactForm = ({ onCloseForm, onSubmit, contact }: IProps) => {
  const [form, setForm] = useState<IContact>(getDefaultValues());
  const [error, setError] = useState<IError>(getDefaultValues());

  useEffect(() => {
    if (contact) setForm(contact);
  }, [contact]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const errors = validateForm(form, validateInput);

    if (isErrorFree(errors)) {
      onSubmit(form);
      setForm(getDefaultValues());
    }

    setError(errors);
  };

  function isErrorFree(errors: IError): boolean {
    let noError = true;
    Object.values(errors).forEach((error) => {
      if (error !== "") {
        noError = false;
      }
    });

    return noError;
  }

  return (
    <div className={`form-container`}>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4 text-info">Add Contact</h2>
        <Input
          label="Name"
          type="text"
          value={form.name}
          onChange={(value) => {
            setForm({ ...form, name: value });
            const name = validateInput(value, regexp.name);
            setError({ ...error, name });
          }}
          error={error.name}
          required={true}
        />
        <Input
          label="Email"
          type="text"
          value={form.email}
          onChange={(value) => {
            setForm({ ...form, email: value });
            const email = validateInput(value, regexp.email);
            setError({ ...error, email });
          }}
          error={error.email}
          required={true}
        />
        <div className="d-flex flex-row gap-4">
          <Input
            label="Mobile"
            type="number"
            value={form.mobile}
            onChange={(value) => {
              setForm({ ...form, mobile: value });
              const mobile = validateInput(value, regexp.mobile);
              setError({ ...error, mobile });
            }}
            error={error.mobile}
            required={true}
          />
          <Input
            label="Landline"
            type="number"
            value={form.landline}
            onChange={(value) => {
              setForm({ ...form, landline: value });
              const landline = validateInput(value, regexp.landline);
              setError({ ...error, landline });
            }}
            error={error.landline}
            required={true}
          />
        </div>
        <Input
          label="Website"
          type="text"
          value={form.website}
          onChange={(value) => {
            setForm({ ...form, website: value });
            const website = validateInput(value, regexp.website);
            setError({ ...error, website });
          }}
          error={error.website}
          required={true}
        />
        <Input
          label="Address"
          type="text"
          value={form.address}
          onChange={(value) => {
            setForm({ ...form, address: value });
            const address = validateInput(value, regexp.address);
            setError({ ...error, address });
          }}
          error={error.address}
          required={true}
        />

        <button type="submit" className="btn btn-success float-end">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-secondary float-end me-3"
          onClick={() => {
            setError(getDefaultValues());
            setForm(getDefaultValues());
            onCloseForm();
          }}
        >
          close
        </button>
      </form>
    </div>
  );
};
