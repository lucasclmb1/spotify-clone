import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { EyeSlash } from "phosphor-react-native"
import { useNavigation } from '@react-navigation/native'
import { Header, AlternativeLogin } from 'app-components'
import { getToken, saveData } from "app-services"
import { styles } from "./styles"

export default function SignIn() {
  const navigation = useNavigation()

  async function handleSignIn() {
    try {
      const { data } = await getToken()
      saveData('ACCESS_TOKEN', data.access_token)
      console.log(data.access_token)
      navigation.navigate('Home')
    } catch(e) {
      console.error(e)
    }
  }

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
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}><Text style={styles.signInButtonText}>Sign In</Text></TouchableOpacity>
        <AlternativeLogin />
      </View>
    </View>
  );
}
