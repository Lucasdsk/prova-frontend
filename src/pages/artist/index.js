import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { getAlbuns, getSongs } from 'api'
import UserDescription from 'components/user-description'
import Container from 'components/container'
import PageNotFound from 'components/page-not-found'
import Menu from './components/menu'
import Albuns from './components/albuns'
import SiaImage from 'images/sia.jpg'
import "./index.scss"

const Artists = () => <Container>Artists</Container>
const Playlists = () => <Container>Playlists</Container>

const MenuOptions = (url) => [
  {
    name: 'Albuns',
    basePath: `${url}/albuns`,
    path: 'albuns',
  },
  {
    name: 'Artists',
    basePath: `${url}/artists`,
    path: 'artists',
  },
  {
    name: 'Playlists',
    basePath: `${url}/playlists`,
    path: 'playlists'
  },
]

class Artist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      albunsList: [],
    }
  }

  async componentDidMount() {
    try {
      const { artistName } = this.props.match.params
      const albunsResponse = await getAlbuns(artistName)
      const songsResponse = await getSongs(artistName)
      const { results: albuns } = albunsResponse.data
      const { results: songs } = songsResponse.data

      const albunsList = albuns.sort((a, b) => b.releaseDate.localeCompare(a.releaseDate)).map(album => ({
        ...album,
        songs: songs.filter(song => song.collectionId === album.collectionId),
      }))
      
      this.setState({
        albunsList,
      })
    } catch(err) {
      console.log('error', err)
    }
  }

  render() {
    const {
      location: { pathname },
      match: { url }
    } = this.props

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
            <Menu path={pathname} options={MenuOptions(url)} />
          </Container>
        </Container>
  
        <Container primary={false} className="artist-page__container">
          <Switch>
            <Route path="/artist/:artistName/albuns" render={(props) => (
              <Albuns {...props} data={this.state.albunsList} />
            )}/>
            <Route path="/artist/:artistName/artists" component={Artists} />
            <Route path="/artist/:artistName/playlists" component={Playlists} />
            <Route component={PageNotFound} />
          </Switch>
        </Container>
      </Container>
    )
  }
}

export default Artist
