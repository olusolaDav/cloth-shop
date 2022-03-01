import React, { Component } from 'react'
import {sections} from '../utilities/data.js'
import { MenuItem } from '../components/MenuItem';

import './directory.scss'

export default class extends Component {
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
