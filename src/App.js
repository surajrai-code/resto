import React,{useState} from 'react'
import Header from './components/LayOut/Header'
import MealsSummary from './components/Meal/MealsSummary.js'
import MealList from './components/Meal/MealList'
import Cart from './components/Cart/Cart'
import CartProvider from './components/Cart/CartProvider'
const App = () => {
  const [cartIsShown,setCartIsShown]=useState(false);
  const showCartHandler=()=>{
    setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler}/>
      <MealsSummary/>
      <MealList/>
     {cartIsShown && <Cart onClose={hideCartHandler}/>}
    </CartProvider>
  )
}

export default App
