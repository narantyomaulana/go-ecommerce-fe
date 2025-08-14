import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getAuthClient } from "../../api/grpc/client";
import { useAuthStore } from "../../store/auth";

function AdminNavbar() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const logoutHandler = async () => {
    const result = await Swal.fire({
      title: "Yakin Ingin logout?",
      showCancelButton: true,
      cancelButtonText: "Batal",
      confirmButtonText: "Ya, Logout",
    });

    if (result.isConfirmed) {
      const res = await getAuthClient().logout({});

      if (!res.response.base?.isError) {
        logout();
        localStorage.removeItem("access_token");
        navigate("/");
      }
    }
  };
  return (
    <nav
      className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
      aria-label="Admin navigation bar"
    >
      <div className="container">
        <Link className="navbar-brand" to="/admin">
          Havenwood<span>.</span> Admin
        </Link>

        <div className="d-flex align-items-center">
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0">
            <li className="nav-item margin-right">
              <Link className="nav-link" to="/admin/profile/change-password">
                <img src="/images/user.svg" alt="Admin Profile" />
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="nav-link border-0 bg-transparent"
                onClick={logoutHandler}
              >
                <img src="/images/sign-out.svg" alt="Logout" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
