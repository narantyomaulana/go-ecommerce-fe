import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth";
import { getAuthClient } from "../../api/grpc/client";
import Swal from "sweetalert2";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useAuthStore((state) => state.logout);
  const { pathname } = useLocation();

  const cartUrl = isLoggedIn ? "/cart" : "/login";
  const profileUrl = isLoggedIn ? "/profile/change-password" : "/login";

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
      className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
      aria-label="Furni navigation bar"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          Havenwood<span>.</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className={`nav-item ${pathname === "/shop" ? "active" : ""}`}>
              <Link className="nav-link" to="/shop">
                Belanja
              </Link>
            </li>
            <li
              className={`nav-item ${pathname === "/services" ? "active" : ""}`}
            >
              <Link className="nav-link" to="/services">
                Layanan
              </Link>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li className="margin-right">
              <Link className="nav-link" to={cartUrl}>
                <img src="/images/cart.svg" alt="Cart" />
              </Link>
            </li>
            <li className="margin-right">
              <Link className="nav-link" to={profileUrl}>
                <img src="/images/user.svg" alt="User" />
              </Link>
            </li>
            {isLoggedIn && (
              <li onClick={logoutHandler}>
                <button className="nav-link border-0 bg-transparent">
                  <img src="/images/sign-out.svg" alt="Logout" />
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
