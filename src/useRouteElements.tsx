import { Navigate, Outlet, useRoutes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import RegisterLayout from "./layouts/RegisterLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import Profile from "./pages/Profile";

function ProtectedRoute() {
    const isAuthenticated = true;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
function RejectRoute() {
    const isAuthenticated = false;

    return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
export default function useRouteElements() {
    const routeElements = useRoutes([
        {
            path: "/",
            index: true,
            element: (
                <MainLayout>
                    <ProductList />,
                </MainLayout>
            ),
        },
        {
            path: "",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/profile",
                    element: (
                        <MainLayout>
                            <Profile />,
                        </MainLayout>
                    ),
                },
            ],
        },
        {
            path: "",
            element: <RejectRoute />,
            children: [
                {
                    path: "/login",
                    element: (
                        <RegisterLayout>
                            <Login />
                        </RegisterLayout>
                    ),
                },
                {
                    path: "/register",
                    element: (
                        <RegisterLayout>
                            <Register />
                        </RegisterLayout>
                    ),
                },
            ],
        },
    ]);
    return routeElements;
}
