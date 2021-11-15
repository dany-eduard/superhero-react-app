/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export interface superHeroes {
  hero: any
  list: any[]
  index: number // Ultimo ID
  loading: boolean
}

const initialState: superHeroes = {
  hero: {},
  list: [],
  index: 1,
  loading: false,
}

export const superHeroesSlice = createSlice({
  name: 'superHeroes',
  initialState,
  reducers: {
    setHero: (state, action) => {
      state.hero = action.payload
    },
    pushHerotoList: (state, action) => {
      state.list.push(...action.payload)
    },
    resetList: (state) => {
      state.list = []
    },
    setIndex: (state, action) => {
      state.index = action.payload
    },
    incrementIndex: (state) => {
      state.index += 1
    },
    resetIndex: (state) => {
      state.index = 1
    },
    decrementIndex: (state) => {
      state.index -= 1
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

export const { setHero, pushHerotoList, resetList, incrementIndex, setIndex, setLoading } = superHeroesSlice.actions
export default superHeroesSlice.reducer
