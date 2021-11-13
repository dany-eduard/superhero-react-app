import Apariencia from 'pages/Apariencia'
import Dashboard from 'pages/Dashboard'
import Habilidades from 'pages/Habilidades'
import Layout from 'components/Layout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} /> {/* Inicio */}
        <Route path="/habilidades" element={<Habilidades />} /> {/* Filtrar por habilidades */}
        <Route path="/apariencia" element={<Apariencia />} /> {/* Filtrar por Apariencia */}
      </Routes>
    </Layout>
  </Router>
)

export default App
