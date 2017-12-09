import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './index.scss'

const Container = ({
  children,
  className,
  fluid,
  noBorders,
  noBorderTop,
  noBorderRight,
  noBorderBottom,
  noBorderLeft,
  primary,
}) => {
  return (
    <div
      className={cx('container', className, {
        'container--fluid': fluid,
        'container--primary': primary,
        'container--no-borders': noBorders,
        'container--no-border-top': noBorderTop,
        'container--no-border-right': noBorderRight,
        'container--no-border-bottom': noBorderBottom,
        'container--no-border-left': noBorderLeft,
      })}
    >
      {children}
    </div>
  )
}

Container.defaultProps = {
  primary: true,
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
  ]),
  className: PropTypes.string,
  fluid: PropTypes.bool,
  noBorders: PropTypes.bool,
  noBorderTop: PropTypes.bool,
  noBorderRight: PropTypes.bool,
  noBorderBottom: PropTypes.bool,
  noBorderLeft: PropTypes.bool,
  primary: PropTypes.bool,
}

export default Container
