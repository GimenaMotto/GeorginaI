import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Page2D from "../pages/Page2D"
import Page3D from "../pages/Page3D"
import StatementPage from "../pages/StatementPage"
import ContactPage from "../pages/ContactPage"
import BioPage from "../pages/BioPage"
import CuraduriasPage from "../pages/CuraduriasPage"
import TxtsPage from "../pages/TxtsPage"
import MeGustoTodoPage from "../pages/MeGustoTodoPage"
const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/2D" element={<Page2D />}></Route>
            <Route path="/3D" element={<Page3D />}></Route>
            <Route path="/3D/Megustótodo" element={<MeGustoTodoPage />}></Route >
            <Route path="/Curadurías" element={<CuraduriasPage />}></Route>
            <Route path="/Txts" element={<TxtsPage />}></Route>
            <Route path="/Bio" element={<BioPage />}></Route>
            <Route path="/Statement" element={<StatementPage />}></Route>
            <Route path="/Contacto" element={<ContactPage />}></Route>
        </Routes>
    )
}

export default AppRoutes