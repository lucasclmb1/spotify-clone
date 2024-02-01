import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage'

const spotifyAPI = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
})

async function getUser() {
  const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN')

  return spotifyAPI.get('me', {
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  })
}

async function getUserPublicPlaylists() {
  const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN')
  
  return spotifyAPI.get('me/playlists', {
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  })
}

async function getUserSavedTracks() {
  const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN')
  
  return spotifyAPI.get('me/tracks', {
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  })
}

export { getUser, getUserPublicPlaylists, getUserSavedTracks }
