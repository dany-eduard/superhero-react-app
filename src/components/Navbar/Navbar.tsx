import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const path = useLocation().pathname

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className={`navbar-brand nav-link ${path === '/' && 'active'}`} to="/">
            Inicio
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${path === '/habilidades' && 'active'}`} to="/habilidades">
                Habilidades
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${path === '/apariencia' && 'active'}`} to="/apariencia">
                Apariencia
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar