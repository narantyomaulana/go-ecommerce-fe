import { FieldErrors, Path, UseFormRegister } from "react-hook-form";

interface FormInputProps<T extends Record<string, any>> {
  type: "text" | "password";
  placeholder?: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  errors: FieldErrors<T>;
}

function FormInput<T extends Record<string, any>>(props: FormInputProps<T>) {
  return (
    <div className="form-group mb-4">
      <input
        type={props.type}
        className={`form-control ${
          props.errors[props.name] ? "is-invalid" : ""
        }`}
        placeholder={props.placeholder}
        {...props.register(props.name)}
      />
      <div
        className={`text-danger mt-1 ${
          props.errors[props.name] ? "" : "hidden"
        }`}
        style={{ height: 8 }}
      >
        <small>
          {" "}
          {(props.errors[props.name]?.message as string | null) ?? ""}
        </small>
      </div>
    </div>
  );
}

export default FormInput;
