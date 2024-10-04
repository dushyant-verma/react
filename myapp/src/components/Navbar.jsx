import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul className="flex gap-4 my-4">
            <Link to='/'>home</Link>
            <Link to='/memo'>use memo</Link> 
            <Link to='/reducer'>use reducer</Link>
            <Link to='/effect'>use effect</Link> 
        </ul>
    </div>
  )
}

export default Navbar