import React from 'react'
import PropTypes from 'prop-types'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import Container from 'components/container'
import HeaderActions from 'components/header-actions'
import UserDescription from 'components/user-description'
import PageNotFound from 'components/page-not-found'
import HOCResponsive from 'components/HOC-responsive'
import Icon from 'react-fontawesome'
import Artist from './artist'
import ProfileImage from 'images/profile.jpg'
import './index.scss'

const Options = () => (
  <div className="header-options">
    <Icon className="header-actions__icon" name="user" />
    <Icon className="header-actions__icon" name="comment-o" />
  </div>
)

const redirectToArtistPage = () => <Redirect to="/artist/sia/albuns" />

const Pages = ({ mobile }) => (
  <Container
    className="app-container"
    fluid
    primary={false}
  >
    <Container className="app-container__header" fluid noBorderTop >
      <HeaderActions notificationCount={2} />
      <UserDescription
        className="app-container__header-user-profile"
        image={ProfileImage}
        imageWidth={50}
        name="Juquinha"
        options={<Options />}
        showOptions={mobile}
      />
    </Container>
    <Switch>
      <Route exact path="/" render={redirectToArtistPage} />
      <Route path="/artist/:artistName" render={(props) => (
        <Artist {...props} mobile={mobile} />
      )} />
      <Route component={PageNotFound} />
    </Switch>
  </Container>
)

Pages.propTypes = {
  mobile: PropTypes.bool,
}

export default HOCResponsive(Pages)
