import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { getAuthClient } from "../../api/grpc/client";
import Swal from "sweetalert2";
import { useState } from "react";

const registerSchema = yup.object().shape({
  full_name: yup.string().required("Nama lengkap harus diisi"),
  email: yup.string().email("Email tidak valid").required("Email harus diisi"),
  password: yup
    .string()
    .min(6, "Password minimal 6 karakter")
    .required("Password harus diisi"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Password tidak cocok")
    .required("Konfirmasi password harus diisi"),
});
interface RegisterFormValues {
  full_name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const Register = () => {
  const navigate = useNavigate();
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const form = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
  });

  const submitHandler = async (values: RegisterFormValues) => {
    try {
      setSubmitLoading(true);
      var res = await getAuthClient().register({
        email: values.email,
        fullName: values.full_name,
        password: values.password,
        passwordConfirmation: values.password_confirmation,
      });

      if (res.response.base?.isError ?? true) {
        if (res.response.base?.message == "User Already Exists") {
          Swal.fire({
            title: "Registrasi Gagal",
            text: "Email sudah terdaftar",
            icon: "error",
          });
          return;
        }
        Swal.fire({
          title: "Terjadi Kesalahan",
          text: "Mohon Coba Beberapa saat lagi",
          icon: "error",
        });
        return;
      }

      Swal.fire({
        title: "Registrasi Berhasil",
        text: "Akun Anda telah berhasil dibuat",
        icon: "success",
      });
      navigate("/login");
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div className="login-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="login-wrap p-4">
              <h2 className="section-title text-center mb-5">Daftar</h2>
              <form
                onSubmit={form.handleSubmit(submitHandler)}
                className="login-form"
              >
                <FormInput<RegisterFormValues>
                  errors={form.formState.errors}
                  name="full_name"
                  register={form.register}
                  type="text"
                  placeholder="Nama Lengkap"
                  disabled={submitLoading}
                />
                <FormInput<RegisterFormValues>
                  errors={form.formState.errors}
                  name="email"
                  register={form.register}
                  type="text"
                  placeholder="Alamat Email"
                  disabled={submitLoading}
                />
                <FormInput<RegisterFormValues>
                  errors={form.formState.errors}
                  name="password"
                  register={form.register}
                  type="password"
                  placeholder="Masukan Kata Sandi"
                  disabled={submitLoading}
                />
                <FormInput<RegisterFormValues>
                  errors={form.formState.errors}
                  name="password_confirmation"
                  register={form.register}
                  type="password"
                  placeholder="Konfirmasi Kata Sandi"
                  disabled={submitLoading}
                />

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={submitLoading}
                  >
                    Buat Akun
                  </button>
                </div>
                <div className="text-center mt-4">
                  <p>
                    Sudah punya akun?{" "}
                    <Link to="/login" className="text-primary">
                      Masuk di sini
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

export default Register;
