import React from 'react'
import { Nav } from '../../components/nav/Nav'
import Directory from '../../components/directory/Directory'
import './homepage.scss'


export default function Homepage() {
  return (
    <div className='homepage'>
        <Nav />
        <Directory />
    </div>
  )
}

