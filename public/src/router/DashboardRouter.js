import { Route, Routes } from 'react-router-dom'
import Layout from '../componets/layout/Layout'
import ViewsNacional from '../componets/publication/ViewsNacional'
import CienciaYTecnologiaScreen from '../pages/screens/CienciaYTecnologiaScreen'
import DeportesScreen from '../pages/screens/DeportesScreen'
import FarandulaScreen from '../pages/screens/FarandulaScreen'
import InicioScreen from '../pages/screens/InicioScreen'
import InternacionalesScreen from '../pages/screens/InternacionalesScreen'
import NacionalesScreen from '../pages/screens/NacionalesScreen'
import PolicivasScreen from '../pages/screens/PolicivasScreen'

const DashboardRouter = () => {
    return (
        <div>
            <Layout>

                <Routes>
                    <Route path='/' element={<InicioScreen />} />

                    <Route path='/nacionales' element={<NacionalesScreen />} />
                    <Route path='/nacionales/:url' element={<ViewsNacional />} />

                    <Route path='/internacionales' element={<InternacionalesScreen />} />
                    <Route path='/internacionales/:url' element={<ViewsNacional />} />

                    <Route path='/policivas' element={<PolicivasScreen />} />
                    <Route path='/policivas/:url' element={<ViewsNacional />} />

                    <Route path='/deportes' element={<DeportesScreen />} />
                    <Route path='/deportes/:url' element={<ViewsNacional />} />

                    <Route path='/farandula' element={<FarandulaScreen />} />
                    <Route path='/farandula/:url' element={<ViewsNacional />} />

                    <Route path='/cienciaytecnologia' element={<CienciaYTecnologiaScreen />} />
                    <Route path='/cienciaytecnologia/:url' element={<ViewsNacional />} />
                </Routes>
            </Layout>
        </div>
    )
}

export default DashboardRouter