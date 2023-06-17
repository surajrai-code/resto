import React from 'react'
import Header from './components/LayOut/Header'
import MealsSummary from './components/Meal/MealsSummary.js'
import MealList from './components/Meal/MealList'
import Cart from './components/Cart/Cart'
const App = () => {
  return (
    <div>
      <Header/>
      <MealsSummary/>
      <MealList/>
      <Cart/>
    </div>
  )
}

export default App
