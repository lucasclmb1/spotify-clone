import { Image, Text, TouchableOpacity, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import * as WebBrowser from 'expo-web-browser'
import { useEffect } from "react"
import { getAuthorizationCode, getToken } from 'app-services'
import { UnionBottom, SpotifyLogo } from 'app-assets'
import { Header, AlternativeLogin } from 'app-components'
import { PAGE_NAMES } from 'app-constants'
import { styles } from "./styles"

WebBrowser.maybeCompleteAuthSession()

export default function Login() {
  const { response, promptAsync } = getAuthorizationCode()
  const navigation = useNavigation()

  async function authenticate(authorizationCode: string) {
    try {
      const data = await getToken(authorizationCode)
      
      if (data.access_token) {
        const expirationDate = new Date(data.expires_in).getTime()

        AsyncStorage.setItem('ACCESS_TOKEN', data.access_token)
        AsyncStorage.setItem('EXPIRATION_DATE', expirationDate.toString())
        navigation.navigate(PAGE_NAMES.HOME)
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
      <Header />
      <View style={styles.content} >
        <SpotifyLogo width={235} height={70} />
        <Text style={styles.mainText} >Enjoy listening to music</Text>
        <Text style={styles.secondaryText} >Spotify is a proprietary Swedish audio streaming and media services provider </Text>
        <TouchableOpacity style={styles.signInButton} onPress={() => promptAsync()} >
          <Text style={styles.buttonText} >Sign in with Spotify</Text>
        </TouchableOpacity>
        <AlternativeLogin />
      </View>
      <Image style={styles.unionBottom} source={UnionBottom} />
    </View>
  );
}
