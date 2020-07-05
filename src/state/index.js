import { createStore as reduxCreateStore, combineReducers } from "redux"

import countReducer from "./count"

const reducer = combineReducers({
  count: countReducer,
})

const createStore = () => reduxCreateStore(reducer)

export default createStore
