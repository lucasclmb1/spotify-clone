import { encode } from 'base-64'
import axios from "axios"

const CLIENT_ID = 'e8ba339396654ccf9dee50014545627e'
const CLIENT_SECRET = '3ca669159384434594ba34b35f32195c'
const base64ClientCredentials = encode(`${CLIENT_ID}:${CLIENT_SECRET}`)

const api = axios.create({
  baseURL: 'https://accounts.spotify.com/',
  headers: {
    'Authorization': `Basic ${base64ClientCredentials}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

api.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = {
      grant_type: 'client_credentials'
    }
  }
  return config
})

function getToken() {
  return api.post('/api/token')
}

function getUser() {
  return api.get('/v1/me')
}

export { getToken, getUser }
