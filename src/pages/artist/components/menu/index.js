import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from "react-router-dom"
import Icon from 'react-fontawesome'
import './index.scss'

class Menu extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      optionsVisible: false,
    }
  }

  toggleShowOptions = () => {
    this.setState({
      optionsVisible: !this.state.optionsVisible,
    })
  }

  render() {
    const { options, path, mobile } = this.props
    const selectedItem = mobile ? options.find(itemMenu => path.includes(itemMenu.path)) : {}
    return (
      <div className={cx("menu", { "menu--mobile" : mobile })}>
        {
          mobile ? 
          <div className="menu-mobile-container">
            <div
              className="menu__item menu-mobile-container__selected-item"
              onClick={this.toggleShowOptions}
            >
              {selectedItem.name}
              <Icon
                className="menu-mobile-container__toggle-options"
                name="angle-down"
              />
            </div>

            {
              this.state.optionsVisible && (
                <div className="menu-mobile-container__options">
                  {
                    options.filter(itemMenu => !path.includes(itemMenu.path))
                    .map((itemMenu, index) => (
                      <Link
                        key={index}
                        className="menu__item"
                        to={itemMenu.basePath}
                      >{itemMenu.name}</Link>
                    ))
                  }
                </div>
              )
            }
          </div>
          : options.map((itemMenu, index) => (
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
  }
}

Menu.propTypes = {
  options: PropTypes.array.isRequired,
  path: PropTypes.string,
  mobile: PropTypes.bool,
}

export default Menu
