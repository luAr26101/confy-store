type FormInputProps = {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
};

function FormInput({
  label,
  name,
  type = "text",
  defaultValue = "",
}: FormInputProps) {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label block">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input"
      />
    </div>
  );
}

export default FormInput;
