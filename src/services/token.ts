import axios from "axios"
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'
import { encode } from 'base-64'
import { CLIENT_ID, CLIENT_SECRET } from 'app-constants'

function getAuthorizationCode() {
  const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  }
  const scopes = [
    'user-read-email',
    'user-library-read',
    'user-read-recently-played',
    'user-top-read',
    'playlist-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
  ]

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: CLIENT_ID,
      scopes: scopes,
      usePKCE: false,
      redirectUri: makeRedirectUri({
        scheme: 'exp://192.168.1.114:8081',
      }),
    },
    discovery
  )

  return { request, response, promptAsync }
}

async function getToken(authorizationCode: string) {
  const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
  const REDIRECT_URL = 'exp://192.168.1.114:8081'

  try {
    const response = await axios.post(
      TOKEN_ENDPOINT,
      new URLSearchParams({
        grant_type: 'authorization_code',
        code: authorizationCode,
        redirect_uri: REDIRECT_URL,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${encode(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
        },
      }
    )

    const { data } = response
    return data
  } catch (error: any) {
    console.error('Error obtaining access token:', error.response ? error.response.data : error.message);
  }
}

export { getToken, getAuthorizationCode }
