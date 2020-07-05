import React from "react"
import { useSelector, useDispatch } from "react-redux"

import countStyle from "../styles/darkMode/counter.module.scss"
import { addOne, subOne } from "../state/count"

export default () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
    <div className={countStyle.counterContainer}>
      <button onClick={() => dispatch(subOne())} className={countStyle.button}>
        -
      </button>
      <div className={countStyle.margin}>{count}</div>
      <button onClick={() => dispatch(addOne())} className={countStyle.button}>
        +
      </button>
    </div>
  )
}
