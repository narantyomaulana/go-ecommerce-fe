import { Outlet } from 'react-router-dom';
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar';

function AdminLayout() {
    return (
        <div className="admin-layout">
            <AdminNavbar />
            <Outlet />
        </div>
    );
}

export default AdminLayout;
