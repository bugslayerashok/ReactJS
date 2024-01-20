import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment , incrementByAmount } from './CounterSlice'
import AddAmount from './AddAmount'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <AddAmount/>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}