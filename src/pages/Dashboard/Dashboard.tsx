import { RootState } from 'store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import CardHero from 'components/CardHero'
import fetchHeroes from 'services'
import Loader from 'components/Loader'

const Dashboard = () => {
  const dispatch = useDispatch()
  const heroesList = useSelector((state: RootState) => state.superHeroes.list)
  const loading = useSelector((state: RootState) => state.superHeroes.loading)
  const elementRef = useRef<HTMLDivElement>(null)
  const lastId = +(heroesList[heroesList.length - 1]?.id ?? 0)

  const getIdArray = () => {
    const idArray = []
    for (let i = lastId; i < lastId + 10; i += 1) {
      if (i === 732) break
      idArray.push(i + 1)
    }
    return idArray
  }

  const getHeroes = async () => {
    dispatch(fetchHeroes(getIdArray()))
  }

  useEffect(() => {
    let observer: any
    const onChange = (entries: any[], _observer: any) => {
      const el = entries[0]
      if (el.isIntersecting) {
        if (!loading) getHeroes()
        _observer.disconnect()
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined' ? IntersectionObserver : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: '200px',
      })

      observer.observe(elementRef.current as HTMLDivElement)
    })

    return () => observer.disconnect()
  })

  return (
    <div className="custom-container">
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
                showAppearance
                showPowerStats
              />
            </div>
          ))}
        </div>
      </div>
      {loading && <Loader />}
      <div ref={elementRef} />
    </div>
  )
}

export default Dashboard
