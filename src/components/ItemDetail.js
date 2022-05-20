import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemContext } from '../context/ItemContext'
import ProductService from '../services/ProductService'
import "./ItemDetail.css"

function ItemDetail() {
    const {products} = React.useContext(ItemContext)

    const params = useParams()
    let itemID = params.itemId

    let item =  products.find(item => item.id == itemID)
     item = {"name":"Tea","price":5,"score":4}
    const [counter, setCounter] = useState(0);
 
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  const decrease = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
    }
  };

  const makeOrder = () =>{
      let service = new ProductService();
      service.makeOrder(1,"Hookah",counter)
  }
    

  return (
    <div id='item_detail'>
        <h1>{item.name}</h1>
        <div>Price : {item.price}</div>
        <div>Score : {item.score}</div>

        <div className="counter">
               <span className="counter__output">Piece: {counter}</span>
               <div className="btn__container">
                  <button className="control__btn" onClick={increase}>+</button>
                  <button className="control__btn" onClick={decrease}>-</button>
               </div>
        </div>

        <button id='add_cart' onClick={() => makeOrder()}>Make Order</button>
    </div>
  )
}

export default ItemDetail