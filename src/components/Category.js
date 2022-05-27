import React from 'react'
import { Link } from 'react-router-dom'
import { CustomerContext } from '../context/CustomerContext'

function Category({category,products}) {

  return (
    <div>
        <h1>{category}</h1>
        {products[category].map(item =>
            <Link to={"detail/"+item.id} key={item.id}>{item.name}</Link>
        )}
        
    </div>
  )
}

export default Category