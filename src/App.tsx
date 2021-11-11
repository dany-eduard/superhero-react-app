import Layout from 'components/Layout'
import Dashboard from 'pages/Dashboard'
import Habilidades from 'pages/Habilidades'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} /> {/* Inicio */}
        <Route path="/habilidades" element={<Habilidades />} /> {/* Filtrar por habilidades */}
        <Route path="/apariencia" element={<h2>Apariencia</h2>} /> {/* Filtrar por Apariencia */}
      </Routes>
    </Layout>
  </Router>
)

export default App
