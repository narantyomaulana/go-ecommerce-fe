import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import * as yup from "yup";
import Forminput from "../../components/FormInput/Forminput";

const loginSchema = yup.object().shape({
  email: yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: yup
    .string()
    .min(6, "Kata sandi minimal 6 karakter")
    .required("Kata sandi wajib diisi"),
});

interface LoginFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const form = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const submitHandler = (values: LoginFormValues) => {
    console.log("Login form submitted with values:", values);
    Swal.fire({
      icon: "success",
      title: "Login Sukses",
      confirmButtonText: "OK",
    });
  };
  return (
    <div className="login-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="login-wrap p-4">
              <h2 className="section-title text-center mb-5">Masuk</h2>
              <form
                onSubmit={form.handleSubmit(submitHandler)}
                className="login-form"
              >
                <Forminput<LoginFormValues>
                  errors={form.formState.errors}
                  name="email"
                  register={form.register}
                  type="text"
                  placeholder="Alamat Email"
                />
                <Forminput<LoginFormValues>
                  errors={form.formState.errors}
                  name="password"
                  register={form.register}
                  type="text"
                  placeholder="Kata Sandi"
                />
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Masuk
                  </button>
                </div>
                <div className="text-center mt-4">
                  <p>
                    Belum punya akun?{" "}
                    <Link to="/register" className="text-primary">
                      Daftar di sini
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
