import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import ECommerceLayout from './layouts/ECommerceLayout/ECommerceLayout';
import NotFound from './pages/NotFound/NotFound';
import Shop from './pages/Shop/Shop';
import Services from './pages/Services/Services';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import CheckoutSuccess from './pages/CheckoutSuccess/CheckoutSuccess';
import ChangePasswordSection from './components/ChangePasswordSection/ChangePasswordSection';
import OrderHistorySection from './components/OrderHistorySection/OrderHistorySection';
import AdminLayout from './layouts/AdminLayout/AdminLayout';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import AdminProfile from './pages/AdminProfile/AdminProfile';
import AdminOrderDetail from './pages/AdminOrderDetail/AdminOrderDetail';
import AdminCreateProduct from './pages/AdminCreateProduct/AdminCreateProduct';
import AdminProductListSection from './components/AdminProductListSection/AdminProductListSection';
import AdminOrderListSection from './components/AdminOrderListSection/AdminOrderListSection';
import AdminCustomerListSection from './components/AdminCustomerListSection/AdminCustomerListSection';
import AdminSalesReportSection from './components/AdminReportSection/AdminReportSection';
import AdminDashboardSection from './components/AdminDashboardSection/AdminDashboardSection';
import OrderDetailSection from './components/OrderDetailSection/OrderDetailSection';

const router = createBrowserRouter([
    {
        path: "/",
        element: <ECommerceLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'shop', element: <Shop /> },
            { path: 'services', element: <Services /> },
            { path: 'cart', element: <Cart /> },
            { path: 'checkout', element: <Checkout /> },
            { path: 'checkout/success', element: <CheckoutSuccess /> },
            {
                path: 'profile',
                element: <Profile />,
                children: [
                    { path: 'change-password', element: <ChangePasswordSection /> },
                    { path: 'orders', element: <OrderHistorySection /> },
                    { path: 'orders/:id/detail', element: <OrderDetailSection /> },
                ]
            },
            { path: '*', element: <NotFound /> },
        ]
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: '',
                element: <AdminDashboard />,
                children: [
                    { path: 'products', element: <AdminProductListSection /> },
                    { path: 'orders', element: <AdminOrderListSection /> },
                    { path: 'customers', element: <AdminCustomerListSection /> },
                    { path: 'reports', element: <AdminSalesReportSection /> },
                    { path: 'dashboard', element: <AdminDashboardSection /> },
                ]
            },
            {
                path: 'profile',
                element: <AdminProfile />,
                children: [
                    { path: 'change-password', element: <ChangePasswordSection /> },
                ]
            },
            { path: "order", element: <AdminOrderDetail /> },
            { path: "products/create", element: <AdminCreateProduct /> },
        ]
    }
])

function App() {
    return <RouterProvider router={router} />
}

export default App;
