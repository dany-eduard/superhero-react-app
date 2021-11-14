import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from 'components/Layout'
import Loader from 'components/Loader'

const Apariencia = lazy(() => import('pages/Apariencia'))
const Dashboard = lazy(() => import('pages/Dashboard'))
const Habilidades = lazy(() => import('pages/Habilidades'))
const NotFound = lazy(() => import('pages/NotFound'))

const App = () => (
  <BrowserRouter>
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/apariencia" element={<Apariencia />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  </BrowserRouter>
)

export default App
