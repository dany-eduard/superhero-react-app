/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit'
import superHeroes from './slices/superHeroes'

export const store = configureStore({
  reducer: {
    superHeroes
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
