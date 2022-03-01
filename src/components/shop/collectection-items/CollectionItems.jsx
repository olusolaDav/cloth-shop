import React from 'react'
import './colletion-items.scss'

export default function CollectionItems({imageUrl, name, price}) {

    console.log(name, price, imageUrl)
  return (
    <div className='collection-item'>
        <div className="image"
            style={{backgroundImage: `url(${imageUrl})`}}
        />
        

        <div className="collection-footer">
            <span className='name'>{name} </span>
            <span className='price'>{price} </span>
        </div>
    </div>
  )
}
