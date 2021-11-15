/* eslint-disable no-nested-ternary */
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { fetchSearchHero } from 'services'
import { Input } from 'components/Inputs'
import { resetList } from 'store/slices/superHeroes'
import { RootState } from 'store'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import CardHero from 'components/CardHero'
import Loader from 'components/Loader'

const ResultadoBusqueda = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const heroesList = useSelector((state: RootState) => state.superHeroes.list)
  const loading = useSelector((state: RootState) => state.superHeroes.loading)
  const [searchValue, setSearchValue] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleFormSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`?${searchValue}`)
    dispatch(resetList())
    if (searchValue) {
      dispatch(fetchSearchHero(searchValue))
    }
  }

  useEffect(() => {
    const { value } = document.querySelector('#input-search') as HTMLInputElement
    if (value && value !== '') dispatch(fetchSearchHero(value))
    setSearchValue(value)
    return () => {
      dispatch(resetList())
    }
  }, [])

  return (
    <div className="custom-container">
      <form className="mb-4 d-flex" onSubmit={handleFormSearch}>
        <Input
          autoComplete="off"
          id="input-search"
          onChange={handleChange}
          placeholder="Buscar un heroe"
          value={searchValue}
        />
        <button className="btn btn-primary" type="submit" disabled={loading}>
          Buscar
        </button>
      </form>

      {loading ? (
        <Loader />
      ) : heroesList.length > 0 ? (
        <>
          <h2>
            Resultado para: <code>{searchValue}</code>
          </h2>
          <div className="mt-5 mb-3">
            <div className="row">
              {heroesList.map((hero) => (
                <div className="col-md-4" key={hero.id}>
                  <CardHero
                    name={hero.name}
                    powerstats={hero.powerstats}
                    fullName={hero.biography[`full-name`]}
                    alignment={hero.biography.alignment}
                    appearance={hero.appearance}
                    image={hero.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <h3>No hay resultados para mostrar.</h3>
      )}
    </div>
  )
}

export default ResultadoBusqueda
