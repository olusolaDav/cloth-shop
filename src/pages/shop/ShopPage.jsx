import React, { Component } from 'react'
import { Nav } from '../../components/nav/Nav'
import { CollectionPreview} from '../../components/shop/ShopPreview'
import { SHOP_DATA } from '../../dist/data/ShopData'
import './shop-page.scss'



export default class ShopPage extends Component {
    constructor(){
        super()

        this.state = {
            collections: SHOP_DATA
        }
    }
  render() {
      const {collections} = this.state
      console.log(collections)
    return (
      <div className='shop-page'>
          <Nav />
          {
            collections.map(({id, ...otherCollectionItems}) => (
                <CollectionPreview key={id} {...otherCollectionItems}  />
          ))
          }
      </div>
    )
  }
}
