import "./Button.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
}

function Button({
  text,
  onClick,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  return (
    <button className={`btn btn-${variant}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;