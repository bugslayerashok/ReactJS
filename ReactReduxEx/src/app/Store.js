import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../features/Counter/CounterSlice'

export const Store = configureStore({
  reducer: {
    counter:CounterReducer,
  },
})