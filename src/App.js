import React,{useState} from 'react'
import Header from './components/LayOut/Header'
import MealsSummary from './components/Meal/MealsSummary.js'
import MealList from './components/Meal/MealList'
import Cart from './components/Cart/Cart'
const App = () => {
  const [cartIsShown,setCartIsShown]=useState(false);
  const showCartHandler=()=>{
    setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <div>
      <Header onShowCart={showCartHandler}/>
      <MealsSummary/>
      <MealList/>
     {cartIsShown && <Cart onClose={hideCartHandler}/>}
    </div>
  )
}

export default App
