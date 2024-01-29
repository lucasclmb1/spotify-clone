import axios from "axios"
import { getData } from './asyncStorage'

const TOKEN = getData('ACCESS_TOKEN')

const api = axios.create({
  baseURL: 'https://api.spotify.com/',
})

function getUser(token: string) {
  return api.get('v1/me', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}

export { getUser }
