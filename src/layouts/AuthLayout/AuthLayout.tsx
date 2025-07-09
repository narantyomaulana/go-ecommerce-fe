import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
    return (
        <>
            <Navbar />

            <Outlet />
        </>
    );
}

export default AuthLayout;
