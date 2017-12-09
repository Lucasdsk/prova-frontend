import React from 'react'
import { Link } from "react-router-dom"
import './index.scss'

const Menu = () => {
  return (
    <div className="menu">
      <Link className="menu__item" to="/artist/albuns">Albuns</Link>
      <Link className="menu__item" to="/artist/artists">Artistas</Link>
      <Link className="menu__item" to="/artist/playlists">Playlists</Link>
    </div>
  )
}

export default Menu
