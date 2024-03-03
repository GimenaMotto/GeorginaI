import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Page2D from "../pages/Page2D"
import Page3D from "../pages/Page3D"
import MeGustoTodo from "../components/MeGustoTodo"
import WelcomeLaFlorida from "../components/WelcomeLaFlorida"
import MakeOverPasto from "../components/MakeOverPasto"
import Kmdedistancia from "../components/Kmdedistancia"
import Bio from "../components/Bio";
import Statement from "../components/Statement";





const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/2D" element={<Page2D />}></Route>
            <Route path="/3D" element={<Page3D />}></Route>
            <Route path="/3D/Megustótodo" element={<MeGustoTodo />}></Route >
            <Route path="/3D/WelcomeLaFlorida" element={<WelcomeLaFlorida />}></Route >
            <Route path="/3D/MakeOverPasto" element={<MakeOverPasto />}></Route >
            <Route path="/3D/Kmdedistancia" element={<Kmdedistancia />}></Route >

            <Route path="/Bio" element={<Bio />}></Route>
            <Route path="/Statement" element={<Statement />}></Route>

        </Routes>
    )
}

export default AppRoutes