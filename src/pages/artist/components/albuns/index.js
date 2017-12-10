import React from 'react'
import PropTypes from 'prop-types'
import Container from 'components/container'
import './index.scss'

const MusicList = ({ musics }) => {
  return (
    <div className="albuns-list__music-list">
      {
        musics.map((music, index) => (
          <div key={index} className="albuns-list__music-list__music">
            <span className="music-name">{ music.name }</span>
            <span className="music-duration">{ music.duration }</span>
          </div>
        ))
      }
    </div>
  )
}

MusicList.propTypes = {
  musics: PropTypes.array.isRequired,
}

const AlbumTitle = ({ year, title }) => {
  return (
    <div className="albuns-list__title">
      <span className="album-year">{year}</span>
      <h2 className="album-name">{title}</h2>
    </div>
  )
}

AlbumTitle.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

const MOCK_MUSIC_LIST = [
  {
    name: 'musica 1',
    duration: '3:27'
  },
  {
    name: 'musica 2',
    duration: '3:28'
  }
]

const Album = () => {
  return (
    <div className="albuns-list__album">
      <div className="albuns-list__album-image">
        <img src="http://is4.mzstatic.com/image/thumb/Music4/v4/69/48/2e/69482ef7-3554-174e-73da-3fab18d55889/source/100x100bb.jpg" alt="sia"/>
      </div>
      <div className="albuns-list__album-info">
        <AlbumTitle year={2017} title="Everyday is a Christmas" />
        <MusicList musics={MOCK_MUSIC_LIST} />
      </div>
    </div>
  )
}

const AlbunsList = () => {
  return (
    <Container className="albuns-list">
      <Album />
    </Container>
  )
}

AlbunsList.propTypes = {

}

export default AlbunsList
