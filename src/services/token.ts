import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { encode } from 'base-64'
import { CLIENT_ID, CLIENT_SECRET } from 'app-constants'


async function getToken(authorizationCode: string) {
  console.log(authorizationCode)
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

export { getToken }
