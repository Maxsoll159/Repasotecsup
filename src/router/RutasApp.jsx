import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Auth/Login"
import { PrivateRouter } from "./PrivateRouter"
import { Productos } from "../pages/Products/Productos"

export const RutasApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<PrivateRouter>
                <Productos />
            </PrivateRouter>} />
            <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
    )
}
