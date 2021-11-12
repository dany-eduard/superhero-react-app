import axios from 'axios'
import { pushHerotoList } from 'store/slices/superHeroes'

const ApiUrl = process.env.REACT_APP_API_URL
const ApiKey = process.env.REACT_APP_API_KEY

const fetchHeroes = (params: string | number) => async (dispatch: Function) => {
  try {
    const response = await axios.get(`${ApiUrl}${ApiKey}/${params}`)
    dispatch(pushHerotoList(response.data))
  } catch (error) {
    throw new Error(error as string)
  }
}

export default fetchHeroes
