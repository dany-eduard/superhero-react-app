/* eslint-disable no-unused-vars */
import axios from 'axios'
import { pushHerotoList, resetList, setLoading } from 'store/slices/superHeroes'

const ApiUrl = process.env.REACT_APP_API_URL
const ApiKey = process.env.REACT_APP_API_KEY

const filterSuccess = (response: any[]) => response.filter((item: any) => item.status === 'fulfilled')

const setHeroes = (resSuccess: any[], dispatch: Function) => {
  const data = resSuccess.map((item) => item.value.data)
  dispatch(pushHerotoList(data))
}

const fetchHeroes = (params: number[]) => async (dispatch: Function) => {
  dispatch(setLoading(true))
  const requets = params.map((id) => axios.get(`${ApiUrl}${ApiKey}/${id}`))
  try {
    const res = await Promise.allSettled(requets)
    const resSucces = filterSuccess(res)
    setHeroes(resSucces, dispatch)
  } catch (error) {
    throw new Error(error as string)
  } finally {
    dispatch(setLoading(false))
  }
}

export const fetchSearchHero = (params: string) => async (dispatch: Function) => {
  dispatch(setLoading(true))
  try {
    const res = await axios.get(`${ApiUrl}${ApiKey}/search/${params}`)
    const data = res.data.results || []
    dispatch(resetList())
    dispatch(pushHerotoList(data))
  } catch (error) {
    throw new Error(error as string)
  } finally {
    dispatch(setLoading(false))
  }
}

export default fetchHeroes
