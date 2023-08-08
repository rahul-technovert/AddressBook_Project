import { errorMessages } from "../../../constants/Constants";

interface IProp {
  label: string;
  type: string;
  value: string;
  error: string;
  required?: boolean;
  onChange: (value: string) => void;
}

export const Input = ({
  label,
  type,
  value,
  error,
  onChange,
  required = false,
}: IProp) => {
  return (
    <div className="mb-3">
      <label className="form-label">
        {label}
        {required ? <span className="text-danger">*</span> : ""}
      </label>
      <input
        className={`form-control ${error ? "border-danger" : ""}`}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {error && error === errorMessages.required ? (
        ""
      ) : (
        <p className="text-danger">{error}</p>
      )}
    </div>
  );
};
