import { Hero } from 'interfaces/Hero.interface'
import { RootState } from 'store'
import { SelectPowerstatsOptions, SortOptions } from 'constants/constantsHero'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import CardHero from 'components/CardHero'
import Loader from 'components/Loader'
import Select, { SingleValue } from 'react-select'

interface OSelect {
  label: string
  value: string
}

interface SortSelect extends OSelect {
  value: 'asc' | 'desc' | string
}

interface SelectedOptions {
  skill: OSelect | null
  sortOption: SortSelect | null
}

const Habilidades = () => {
  const heroesList = useSelector((state: RootState) => state.superHeroes.list)
  const [isLoading, setIsLoading] = useState(false)
  const [alertDanger, setAlertDanger] = useState(false)
  const [sortedHeroesList, setSortedHeroesList] = useState([] as Hero[] as any[])
  const [selectedOption, setSelectedOption] = useState<SelectedOptions>({
    skill: null,
    sortOption: null,
  })

  const handleSelectChange = (name: string) => (e: SingleValue<OSelect | null>) => {
    setSelectedOption({ ...selectedOption, [name]: e })
  }

  const sortPropertyArray = (array: any[], property: string, sortOption: 'asc' | 'desc') => {
    /**
     * flatMap: Devuelve una versión aplanada del arreglo.
     * match con regex: Obtiene las ocurrencias de una expresión regular.
     * sort: Devuelve un arreglo ordenado.
     * filter: Crea un nuevo arreglo con todos los elementos que cumplan una condición.
     * spreat: Permite a un elemento iterable ser expandido (concatenación para esta solución).
     */
    const nums = array
      .flatMap((curr: any) => curr.powerstats[property].match(/(\d+)/g))
      .sort((a: any, b: any) => (sortOption === 'asc' ? a - b : b - a))
      .filter((num: any) => num)

    const strings = array
      .flatMap((curr: any) => curr.powerstats[property].match(/^[A-Za-z]+$/))
      .filter((string: any) => string)
      .sort((a: any, b: any) => a.localeCompare(b))

    return sortOption === 'asc' ? [...strings, ...nums] : [...nums, ...strings]
  }

  const sortHeroes = (property: string, sortedSkill: string[] | number[]) => {
    const sortedHeroes: Hero[] = []
    sortedSkill.forEach((skill) => {
      heroesList.forEach((hero: Hero) => {
        if (!sortedHeroes.includes(hero) && hero.powerstats[property] === skill) {
          sortedHeroes.push(hero)
        }
      })
    })

    return sortedHeroes
  }

  const validateFilters = () => {
    if (!selectedOption.skill || !selectedOption.sortOption) {
      setAlertDanger(true)
      setTimeout(() => {
        setAlertDanger(false)
      }, 4000)
      return false
    }
    return true
  }

  const handleFilter = () => {
    if (!validateFilters()) return
    setIsLoading(true)
    const { skill, sortOption } = selectedOption
    const sort = sortOption ? sortOption.value : 'asc'
    const property = skill ? skill.value : 'intelligence'
    if (skill && sortOption) {
      if (sort === 'asc' || sort === 'desc') {
        const sortedSkill = sortPropertyArray(heroesList, property, sort)
        const sortedHeroes = sortHeroes(property, sortedSkill)
        setSortedHeroesList(sortedHeroes)
      }
    }
    setIsLoading(false)
  }

  return (
    <div className="custom-container">
      <h2>Habilidades</h2>
      <p>
        Desde este módulo puedes filtrar por habilidad en orden ascendente o descendente la lista de Super Héroes
        previamente cargada en el Inicio <small>(dashboard)</small>.
      </p>

      {alertDanger && (
        <div className="alert alert-danger" role="alert">
          Debe seleccionar una habilidad y una opción de ordenamiento para poder filtrar.
        </div>
      )}

      <div className="row">
        <div className="col-md-5">
          <Select
            className="mt-1 mb-1"
            isClearable
            onChange={handleSelectChange('skill')}
            options={SelectPowerstatsOptions}
            placeholder="Selecciona una habilidad"
            value={selectedOption.skill}
          />
        </div>
        <div className="col-md-5">
          <Select
            className="mt-1 mb-1"
            isClearable
            onChange={handleSelectChange('sortOption')}
            options={SortOptions}
            placeholder="Selecciona la forma de ordenar"
            value={selectedOption.sortOption}
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
            {sortedHeroesList.length > 0 &&
              sortedHeroesList.map((hero) => (
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
    </div>
  )
}

export default Habilidades
