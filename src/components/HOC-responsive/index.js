import React, { Component } from 'react'

const HOCResponsive = (WrappedComponent) =>
  class ResponsiveComponent extends Component {
    constructor(props) {
      super(props)

      this.state = {
        mobile: false,
      }

      this.windowEvent = null
    }

    checkWindowSize = (windowWidth) => {
      if (windowWidth <= 768) {
        this.setState({
          mobile: true,
        })
      } else {
        this.setState({
          mobile: false,
        })
      }
    }

    watchWindowResize = (evt) => {
      evt.target.innerWidth
      this.checkWindowSize(evt.target.innerWidth)
    }

    componentDidMount() {
      this.checkWindowSize(window.innerWidth)
      this.windowEvent = window.addEventListener('resize', this.watchWindowResize)
    }

    componentWillUnmount() {
      removeEventListener(this.windowEvent, this.watchWindowResize)
    }

    render() {
      return (
        <WrappedComponent {...this.props} mobile={this.state.mobile} />
      )
    }
  }

export default HOCResponsive
