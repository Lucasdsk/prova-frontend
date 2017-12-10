import React from 'react'
import PropTypes from 'prop-types'
import Container from 'components/container'
import moment from 'moment'
import './index.scss'

const MusicList = ({ musics }) => (
  <div className="albuns-list__music-list">
    {
      musics.length ?
        musics.map((music, index) => (
          <div key={index} className="albuns-list__music-list__music">
            <span className="music-name">{ music.trackName }</span>
            <span className="music-duration">{ moment(music.trackTimeMillis).format('mm:ss') }</span>
          </div>
        ))
      : (
        <div className="albuns-list__no-data">
          No musics...
        </div>
      )
    }
  </div>
)

MusicList.propTypes = {
  musics: PropTypes.array.isRequired,
}

const AlbumTitle = ({ year, title }) => (
  <div className="albuns-list__title">
    <span className="album-year">{year}</span>
    <h2 className="album-name">{title}</h2>
  </div>
)

AlbumTitle.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

const Album = ({ data }) => (
  <Container className="albuns-list__album">
    <div className="albuns-list__album-image">
      <img src={data.artworkUrl100} alt={data.collectionName} />
    </div>
    <div className="albuns-list__album-info">
      <AlbumTitle year={moment(data.releaseDate).format('Y')} title={data.collectionName} />
      <MusicList musics={data.songs} />
    </div>
  </Container>
)

Album.propTypes = {
  data: PropTypes.object.isRequired,
}

const AlbunsList = ({ data }) => (
  <Container primary={false} className="albuns-list">
    {
      data.map((album) => (
        <Album key={album.collectionId} data={album} />
      ))
    }
  </Container>
)

AlbunsList.propTypes = {
  data: PropTypes.array,
}

export default AlbunsList
