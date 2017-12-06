import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-fontawesome'
import './index.scss'

const HeaderActions = ({ notificationCount }) => (
  <div className="header-actions">
    <Icon className="header-actions__icon" name="user" />
    <Icon className="header-actions__icon" name="comment-o" />
    <span className="header-actions__icon notifications-icon">
      <Icon className="header-actions__icon" name="bell-o" />
      <span className="notifications-icon__counter">2</span>
    </span>
  </div>
)

HeaderActions.propTypes = {
  notificationCount: PropTypes.number,
}

export default HeaderActions
