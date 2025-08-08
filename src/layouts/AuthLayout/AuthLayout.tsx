import Navbar from "../../components/Navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth";
import { useEffect } from "react";

function AuthLayout() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
}

export default AuthLayout;
