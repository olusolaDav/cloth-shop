import React, { Component } from 'react'
import { sections } from '../../dist/data/data';
import { MenuItem } from '../menu-items/MenuItem';


import './directory.scss'

export default class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: sections
        }
    }

    
  render() {
    return (
      <div className='directory-menu'>
          {
              sections.map(({title, imageUrl, id, size}) => 
              <MenuItem key= {id} title= {title} imageUrl = {imageUrl} size={size} />)
          }
        
      </div>
    )
  }
}
