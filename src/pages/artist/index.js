import React from 'react'
import { Route } from 'react-router-dom'
import UserDescription from 'components/user-description'
import Container from 'components/container'
import Menu from './components/menu'
import SiaImage from 'images/sia.jpg'
import "./index.scss"

const Albuns = () => <div>Albuns</div>
const Artists = () => <div>Artists</div>
const Playlists = () => <div>Playlists</div>

const Artist = () => {
  return (
    <Container fluid primary={false} className="artist-page">
      <Container noBorderTop className="artist-page__header" fluid >
        <Container primary={false}>
          <UserDescription
            className="artist-page__info"
            name="Sia"
            imageWidth={100}
            image={SiaImage}
          />
          <Menu />
        </Container>
      </Container>

      <Container primary={false} className="artist-page__container">
        <Route path="/artist/albuns" component={Albuns} />
        <Route path="/artist/artists" component={Artists} />
        <Route path="/artist/playlists" component={Playlists} />
      </Container>
    </Container>
  )
}

export default Artist
