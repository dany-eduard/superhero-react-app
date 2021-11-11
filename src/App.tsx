import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<h2>Dashboard</h2>} /> {/* Inicio */}
      <Route path="/habilidades" element={<h2>Habilidades</h2>} /> {/* Filtrar por habilidades */}
      <Route path="/apariencia" element={<h2>Apariencia</h2>} /> {/* Filtrar por Apariencia */}
    </Routes>
  </Router>
)

export default App
