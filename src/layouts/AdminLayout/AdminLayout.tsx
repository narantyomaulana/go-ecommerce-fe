import { Outlet, useNavigate } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import { useAuthStore } from "../../store/auth";
import { useEffect } from "react";

function AdminLayout() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const userRole = useAuthStore((state) => state.role);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn || userRole !== "admin") {
      navigate("/");
    }
  }, []);
  
  return (
    <div className="admin-layout">
      <AdminNavbar />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
