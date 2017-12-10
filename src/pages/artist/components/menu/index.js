import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from "react-router-dom"
import './index.scss'

const Menu = ({ options, path }) => (
  <div className="menu">
    {
      options.map((itemMenu, index) => (
        <Link
          key={index}
          className={cx(
            'menu__item',
            {'menu__item--active': path.includes(itemMenu.path) }
          )}
          to={itemMenu.basePath}
        >{itemMenu.name}</Link>
      ))
    }
  </div>
)

Menu.propTypes = {
  options: PropTypes.array.isRequired,
  path: PropTypes.string,
}

export default Menu
