import React from "react";
const CartContext= React.createContext({
    item:[],
    totalAmout:0,
    additem:(item)=>{},
    removeItem:(id)=>{},
})
export default CartContext;