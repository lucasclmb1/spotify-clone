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

async function getNewReleases() {
  const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN')
  
  return spotifyAPI.get('browse/new-releases', {
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  })
}

async function getRecommendedTracks() {
  const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN')
  
  return spotifyAPI.get('recommendations', {
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  })
}

async function getRecommendedGenres() {
  const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN')
  
  return spotifyAPI.get('recommendations/available-genre-seeds',
  {
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  })
}

async function getSearchResults(searchQuery: string) {
  const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN')
  
  return spotifyAPI.get(`/search?q=${searchQuery}&type=track`,
  {
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  })
}

export { getUser, getUserPublicPlaylists, getUserSavedTracks, getNewReleases, getRecommendedTracks, getRecommendedGenres, getSearchResults }
