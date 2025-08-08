import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth";

function ECommerceLayout() {
  const userRole = useAuthStore((state) => state.role);
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole === "admin") {
      navigate("/admin/dashboard");
    }
  }, []);

  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}

export default ECommerceLayout;
