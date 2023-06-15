import React from 'react'
import Header from './components/LayOut/Header'
import MealsSummary from './components/Meal/MealsSummary.js'
import MealList from './components/Meal/MealList'
const App = () => {
  return (
    <div>
      <Header/>
      <MealsSummary/>
      <MealList/>
    </div>
  )
}

export default App
