/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import { Hero } from 'interfaces/Hero.interface'
import { Input } from 'components/Inputs'
import { OSelect } from 'interfaces/Geneal.interface'
import { RootState } from 'store'
import { SelectAppearanceOptions } from 'constants/constantsHero'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Select, { SingleValue } from 'react-select'
import Loader from 'components/Loader'
import CardHero from 'components/CardHero'

interface IFilter {
  characteristic: OSelect | null
  value: string | null
}

const Apariencia = () => {
  const heroesList = useSelector((state: RootState) => state.superHeroes.list)
  const [isLoading, setIsLoading] = useState(false)
  const [alertDanger, setAlertDanger] = useState(false)
  const [filtered, setfFiltered] = useState(false)
  const [filteredHeroesList, setFilteredHeroesList] = useState([] as Hero[] as any[])
  const [filterOption, setFilterOption] = useState<IFilter>({
    characteristic: null,
    value: null,
  })

  const handleSelectChange = (name: string) => (e: SingleValue<OSelect | null>) => {
    setFilterOption({ ...filterOption, [name]: e })
  }

  const showAlertIfNotSelected = () => {
    if (!filterOption.characteristic || !filterOption.value) {
      setAlertDanger(true)
      setTimeout(() => {
        setAlertDanger(false)
      }, 3000)
    }
  }

  const handleFilter = () => {
    showAlertIfNotSelected()
    const { characteristic, value } = filterOption
    const property = characteristic?.value

    if (property && value) {
      const filteredHeroes = heroesList.filter((hero: Hero) => {
        if (property === 'height' || property === 'weight') {
          const heroProperty = hero.appearance[property]
          if (heroProperty) return heroProperty[1].includes(value)
          return false
        }
        return hero.appearance[property]?.toString().toLowerCase().trim() === value.toString().toLowerCase().trim()
      })
      setfFiltered(true)
      setFilteredHeroesList(filteredHeroes)
    }
  }

  return (
    <div className="custom-container">
      <h2>Apariencia</h2>
      <p>
        Desde este módulo puedes filtrar la lista de Super Héroes previamente cargada en el Inicio{' '}
        <small>(dashboard)</small> por apariencia. Selecciona una característica y un valor para filtrar. Podrás ver
        todas las coincidencias con la descripción ingresada. Ten en cuenta que el filtro es estricto y los valores
        deben ser ingresados en ingles.
      </p>

      {alertDanger && (
        <div className="alert alert-danger" role="alert">
          Debe seleccionar una característica e ingresar un valor caracteristico para poder filtrar.
        </div>
      )}

      <div className="row">
        <div className="col-md-5">
          <Select
            className="mt-1 mb-1"
            isClearable
            onChange={handleSelectChange('characteristic')}
            options={SelectAppearanceOptions}
            placeholder="Selecciona una característica"
            value={filterOption.characteristic}
          />
        </div>
        <div className="col-md-5">
          <Input
            autoComplete="off"
            className="mt-1 mb-1"
            id="input-filter-value"
            onChange={(e) => setFilterOption({ ...filterOption, value: e.target.value })}
            placeholder="Ingresa el valor característico"
            value={filterOption.value}
          />
        </div>
        <div className="col-md-2">
          <div className="d-grid gap-2 mt-1 mb-1">
            <button type="button" id="btn-order-powerstats" className="btn btn-primary" onClick={handleFilter}>
              Filtrar
            </button>
          </div>
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="mt-5 mb-3">
          <div className="row">
            {filteredHeroesList.length > 0 &&
              filteredHeroesList.map((hero) => (
                <div className="col-md-4" key={hero.id}>
                  <CardHero
                    name={hero.name}
                    powerstats={hero.powerstats}
                    fullName={hero.biography[`full-name`]}
                    alignment={hero.biography.alignment}
                    appearance={hero.appearance}
                    image={hero.image}
                    showAppearance
                  />
                </div>
              ))}
          </div>
        </div>
      )}

      {heroesList.length === 0 && (
        <div className="alert alert-warning" role="alert">
          No existen héroes en la lista. Vuelva al{' '}
          <a href="/superhero-react-app" className="alert-link">
            Inicio
          </a>{' '}
          para precargar algunos.
        </div>
      )}

      {filtered && filteredHeroesList.length === 0 && (
        <div className="alert alert-warning" role="alert">
          No se encontraron coincidencias con el filtro.
        </div>
      )}
    </div>
  )
}

export default Apariencia
