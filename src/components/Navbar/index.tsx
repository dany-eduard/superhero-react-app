import { useLocation } from 'react-router'

const index = () => {
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
          <a className="navbar-brand" href="/">
            Inicio
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link ${path === '/habilidades' && 'active'}`} aria-current="page" href="/habilidades">
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${path === '/apariencia' && 'active'}`} href="/apariencia">
                Apariencia
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default index
