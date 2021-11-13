import { RootState } from 'store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import CardHero from 'components/CardHero'
import fetchHeroes from 'services'
import Loader from 'components/Loader'

const Dashboard = () => {
  const dispatch = useDispatch()
  const heroesList = useSelector((state: RootState) => state.superHeroes.list)
  const loading = useSelector((state: RootState) => state.superHeroes.loading)
  const lastId = +(heroesList[heroesList.length - 1]?.id ?? 0)

  const getIdArray = () => {
    const idArray = []
    for (let i = lastId; i < lastId + 10; i += 1) {
      idArray.push(i + 1)
    }
    return idArray
  }

  const getHeroes = async () => {
    dispatch(fetchHeroes(getIdArray()))
  }

  useEffect(() => {
    dispatch(fetchHeroes(getIdArray()))
    return () => {}
  }, [])

  useEffect(() => {
    window.onscroll = () => {
      if (
        document.documentElement.scrollHeight - document.documentElement.scrollTop ===
        document.documentElement.clientHeight
      ) {
        if (!loading) getHeroes()
      }
    }
    return () => {
      window.onscroll = null
    }
  }, [loading])

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
              />
            </div>
          ))}
        </div>
      </div>
      {loading && <Loader />}
    </div>
  )
}

export default Dashboard
