import axios from 'axios'


const getURL = (artist) => {
  const urlDecoded = decodeURI(artist)
  const artisName = urlDecoded.replace(/\s\s+/g, ' ').replace(/[^\w]/g, '+')
  return `https://itunes.apple.com/search?term=${artisName}&media=music`
}

export const getAlbuns = (artist) => axios.get(`${getURL(artist)}&entity=album`)
export const getSongs = (artist) => axios.get(`${getURL(artist)}&entity=song`)
