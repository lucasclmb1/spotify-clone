import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage'

const api = axios.create({
  baseURL: 'https://api.spotify.com/',
})

async function getUser() {
  const ACCESS_TOKEN = await AsyncStorage.getItem('ACCESS_TOKEN')

  return api.get('v1/me', {
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
  })
}

export { getUser }
