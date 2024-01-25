import { Image, Text, TouchableOpacity, View } from "react-native"
import { Header } from 'app-components'
import { BillieLogin, UnionTop, UnionBottom, SpotifyLogo } from 'app-assets'
import { styles } from "./styles"

export default function Login() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content} >
        <SpotifyLogo width={235} height={70} />
        <Text style={styles.mainText} >Enjoy listening to music</Text>
        <Text style={styles.secondaryText} >Spotify is a proprietary Swedish audio streaming and media services provider </Text>
        <View style={styles.buttonContainer} >
          <TouchableOpacity style={styles.registerButton} >
            <Text style={styles.buttonText} >Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInButton} >
            <Text style={styles.buttonText} >Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Image style={styles.billieLogin} source={BillieLogin} />
      <Image style={styles.unionTop} source={UnionTop} />
      <Image style={styles.unionBottom} source={UnionBottom} />
    </View>
  );
}