import { Link } from 'react-router-dom';

function AdminNavbar() {
    return (
        <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Admin navigation bar">
            <div className="container">
                <Link className="navbar-brand" to="/admin">
                    Furni<span>.</span> Admin
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
                                onClick={() => console.log('Logout clicked')}
                            >
                                <img src="/images/sign-out.svg" alt="Logout" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default AdminNavbar;
