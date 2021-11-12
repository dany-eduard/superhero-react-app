/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export interface superHeroes {
  hero: any
  list: any[]
}

const initialState: superHeroes = {
  hero: {},
  list: [],
}

export const superHeroesSlice = createSlice({
  name: 'superHeroes',
  initialState,
  reducers: {
    setHero: (state, action) => {
      state.hero = action.payload
    },
    pushHerotoList: (state, action) => {
      state.list.push(action.payload)
    },
  },
})

export const { setHero, pushHerotoList } = superHeroesSlice.actions
export default superHeroesSlice.reducer
