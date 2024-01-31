import { useEffect } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { EyeSlash } from "phosphor-react-native"
import * as WebBrowser from 'expo-web-browser'
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Header, AlternativeLogin } from 'app-components'
import { CLIENT_ID } from "app-constants"
import { getToken } from "app-services"
import { styles } from "./styles"

WebBrowser.maybeCompleteAuthSession()

export default function SignIn() {
  const navigation = useNavigation()
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
  );

  async function authenticate(authorizationCode: string) {
    try {
      const data = await getToken(authorizationCode)
      
      if (data.access_token) {
        const expirationDate = new Date(data.expires_in).getTime()

        AsyncStorage.setItem('ACCESS_TOKEN', data.access_token)
        AsyncStorage.setItem('EXPIRATION_DATE', expirationDate.toString())
        navigation.navigate('Home')
      }
    } catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params
      authenticate(code)
    }
  }, [response])

  return (
    <View style={styles.container}>
      <Header hasLogo={true} />
      <View style={styles.content}>
        <Text style={styles.mainText}>Sign In</Text>
        <Text style={styles.secondaryText}>If you need any support <Text style={styles.link} onPress={() => {}}>Click here</Text></Text>
        <View style={styles.inputContent} >
          <TextInput style={styles.inputGroup} placeholderTextColor="#A7A7A7" placeholder="Enter Username or Email" />
          <View style={styles.inputGroup}>
            <TextInput placeholderTextColor="#A7A7A7" placeholder="Password" />
            <EyeSlash size={24} color="#A7A7A7" />
          </View>
        </View>
        <Text style={styles.recoveryText} onPress={() => {}}>Recovery Password</Text>
        <TouchableOpacity style={styles.signInButton} onPress={() => promptAsync()}><Text style={styles.signInButtonText}>Sign In</Text></TouchableOpacity>
        <AlternativeLogin />
      </View>
    </View>
  );
}
