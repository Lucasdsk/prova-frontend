import React from 'react'
import { Router, Route } from 'react-router-dom'
import Container from 'components/container'
import HeaderActions from 'components/header-actions'
import UserDescription from 'components/user-description'
import Artist from './artist'
import ProfileImage from 'images/profile.jpg'
import './index.scss'

const Pages = () => {
  return (
    <Container
      className="app-container"
      fluid
      primary={false}
    >
      <Container className="app-container__header" fluid noBorderTop >
        <HeaderActions />
        <UserDescription
          className="app-container__header-user-profile"
          image={ProfileImage}
          name="Juquinha"
        />
      </Container>
      <div>
        <Route exact path="/" component={Artist} />
        <Route path="/artist" component={Artist} />
      </div>
    </Container>
  )
}

export default Pages
