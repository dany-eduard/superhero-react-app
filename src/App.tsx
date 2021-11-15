import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from 'components/Layout'
import Loader from 'components/Loader'

const Apariencia = lazy(() => import('pages/Apariencia'))
const Dashboard = lazy(() => import('pages/Dashboard'))
const Habilidades = lazy(() => import('pages/Habilidades'))
const NotFound = lazy(() => import('pages/NotFound'))
const ResultadoBusqueda = lazy(() => import('pages/ResultadoBusqueda'))

const App = () => (
  <BrowserRouter>
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/apariencia" element={<Apariencia />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/resultado-busqueda" element={<ResultadoBusqueda />} />
          <Route path="/superhero-react-app" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </Layout>
  </BrowserRouter>
)

export default App
