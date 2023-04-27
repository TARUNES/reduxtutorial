import React from 'react'
import { Provider } from 'react-redux'
import CounterComp from './CounterComp'

import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
    {/* <Home></Home> */}
    <CounterComp></CounterComp>
    </Provider>
  )
}

export default App
