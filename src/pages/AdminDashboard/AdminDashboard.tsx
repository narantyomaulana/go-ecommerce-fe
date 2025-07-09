import { Link, Outlet, useLocation } from 'react-router-dom';

function AdminDashboard() {
    const location = useLocation();

    return (
        <div className="admin-dashboard py-5">
            <div className="container">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-md-3">
                        <div className="nav flex-column nav-pills">
                            <Link to="/admin/dashboard" className={`nav-link ${location.pathname === '/admin/dashboard' ? 'active' : ''}`}>
                                Dashboard Penjualan
                            </Link>
                            <Link to="/admin/products" className={`nav-link ${location.pathname === '/admin/products' ? 'active' : ''}`}>
                                Produk
                            </Link>
                            <Link to="/admin/orders" className={`nav-link ${location.pathname === '/admin/orders' ? 'active' : ''}`}>
                                Order
                            </Link>
                            <Link to="/admin/customers" className={`nav-link ${location.pathname === '/admin/customers' ? 'active' : ''}`}>
                                Pelanggan
                            </Link>
                            <Link to="/admin/reports" className={`nav-link ${location.pathname === '/admin/reports' ? 'active' : ''}`}>
                                Laporan Penjualan
                            </Link>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-md-9">
                        <div className="bg-white p-4 rounded-3">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
