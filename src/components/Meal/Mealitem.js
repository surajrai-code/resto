import React from 'react'
import classes from './Mealitem.module.css';
const Mealitem = (props) => {
  return (
    <li className={classes.meal}>
    <div><h3>{props.name}</h3>
    <div className={classes.description}>{props.description}</div>
    <div className={classes.price}>{props.price}</div>
    </div>
    </li>
  )
}

export default Mealitem;