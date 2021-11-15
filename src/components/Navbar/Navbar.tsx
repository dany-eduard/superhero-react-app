import { Input } from 'components/Inputs'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { fetchSearchHero } from 'services'
import { resetList } from 'store/slices/superHeroes'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const path = useLocation().pathname
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleFormSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`resultado-busqueda?${searchValue}`)
    dispatch(resetList())
    if (searchValue) dispatch(fetchSearchHero(searchValue))
  }

  useEffect(() => {
    setSearchValue('')
  }, [path])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className={`navbar-brand ${path === '/superhero-react-app' && 'active'}`} to="/superhero-react-app">
          Inicio
        </Link>
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
          <form className="d-flex" onSubmit={handleFormSearch}>
            <Input
              autoComplete="off"
              id="input-search"
              onChange={handleChange}
              placeholder="Buscar un heroe"
              value={searchValue}
            />
            <button className="btn btn-outline-light" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
