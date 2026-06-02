import "./InputField.css";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

function InputField({
  label,
  type,
  placeholder,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div className="input-group">
      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default InputField;