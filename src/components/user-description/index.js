import React, { PureComponent } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Icon from 'react-fontawesome'
import DefaultProfileImage from 'images/profile.jpg'
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
      imageWidth,
    } = this.props

    return (
      <div
        className={cx(
          'user-description',
          className,
          {'user-description--click': showOptions}
        )}
        onClick={showOptions ? this.toggleShowOptions : undefined}
      >
        <div
          className="user-description__img"
          style={{ width: imageWidth, height: imageWidth, backgroundImage: `url(${image})` }}
        />
        {
          showOptions ? (
            <div className="user-description__options-wrapper">
              <Icon
                className="user-description__toggle-options"
                name="angle-down"
              />
              {
                this.state.optionsVisible && (
                  <div className="user-description__options-container">
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

UserDescription.defaultProps = {
  imageWidth: 50,
  image: DefaultProfileImage,
}

UserDescription.propTypes = {
  image: PropTypes.string,
  imageWidth: PropTypes.number,
  name: PropTypes.string,
  showOptions: PropTypes.bool,
  className: PropTypes.string,
  options: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
  ]),
}

export default UserDescription
