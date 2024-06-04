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
import NuncaUnVeranoJuntos from "../components/NuncaUnVeranoJuntos"
import EstacionPrimavera from "../components/EstacionPrimavera"
import Campin from "../components/Campin"
import MiSuegraMeMataDeRisa from "../components/MiSuegraMeMataDeRisa"
import HomeMaybe from "../components/HomeMaybe"
import Croquis from "../components/Croquis"
import LaCasaFinal from "../components/LaCasaFinal"
import Precario from "../components/Precario"
import TemporadaEnRosario from "../components/TemporadaEnRosario"
import AmiBiblioteca from "../components/AmiBiblioteca"
import CuraduriasPage from "../pages/CuraduriasPage"
import Monoambiente from "../components/Monoambiente";
import InneMartino from "../components/InneMartino"
import ÁngelesAscuaMayo from "../components/ÁngelesAscuaMayo"
import VirNegri from "../components/VirNegri"

const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/2D" element={<Page2D />}></Route>
            <Route path="/2D/HomeMaybe" element={<HomeMaybe />}></Route>
            <Route path="/2D/AmiBibliotecaLeCrecenPlantas" element={<AmiBiblioteca />}></Route>
            <Route path="/2D/Croquis" element={<Croquis />}></Route>
            <Route path="/2D/LaCasaFinal" element={<LaCasaFinal />}></Route>
            <Route path="/2D/Precario" element={<Precario />}></Route>
            <Route path="/2D/TemporadaEnRosario" element={<TemporadaEnRosario />}></Route>
            <Route path="/3D" element={<Page3D />}></Route>
            <Route path="/3D/Megustótodo" element={<MeGustoTodo />}></Route >
            <Route path="/3D/WelcomeLaFlorida" element={<WelcomeLaFlorida />}></Route >
            <Route path="/3D/MakeOverPasto" element={<MakeOverPasto />}></Route >
            <Route path="/3D/Kmdedistancia" element={<Kmdedistancia />}></Route >
            <Route path="/3D/EstaciónPrimavera" element={<EstacionPrimavera />}></Route >
            <Route path="/3D/Campin" element={<Campin />}></Route >
            <Route path="/3D/NuncaUnVeranoJuntos" element={<NuncaUnVeranoJuntos />}></Route >
            <Route path="/3D/MiSuegraMeMataDeRisa" element={<MiSuegraMeMataDeRisa />}></Route >

            <Route path="/Curadurías" element={<CuraduriasPage />}></Route>
            <Route path="/Curadurías/Monoambiente" element={<Monoambiente />}></Route>
            <Route path="/Curadurías/Monoambiente/InneMartino" element={<InneMartino />}></Route>
            <Route path="/Curadurías/Monoambiente/ÁngelesAscuaMayo" element={<ÁngelesAscuaMayo />}></Route>
            <Route path="/Curadurías/Monoambiente/VirNegri" element={<VirNegri />}></Route>
            <Route path="/Bio" element={<Bio />}></Route>
            <Route path="/Statement" element={<Statement />}></Route>

        </Routes>
    )
}

export default AppRoutes