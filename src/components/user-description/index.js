import React, { PureComponent } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import './index.scss'

class UserDescription extends PureComponent {

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
    const {
      image,
      name,
      className,
      showOptions,
      options,
    } = this.props

    return (
      <div className={cx('user-description', className)}>
        <div className="user-description__img">
          <img src={image} alt={name} />
        </div>
        {
          showOptions ? (
            <div className="user-description__options-wrapper" onClick={this.toggleShowOptions}>
              <span className="user-description__name">
                {name}
              </span>
              {
                options && 
                <div className="user-description__options">
                  { options }
                </div>
              }
            </div>
          )
          : (
            <span className="user-description__name">
              {name}
            </span>
          )
        }
      </div>
    )
  }
}

UserDescription.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  showOptions: PropTypes.bool,
  className: PropTypes.string,
  options: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
  ]),
}

export default UserDescription
