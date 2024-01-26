import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { EyeSlash } from "phosphor-react-native"
import { Header, AlternativeLogin } from 'app-components'
import { styles } from "./styles"

export default function Register() {
  return (
    <View style={styles.container}>
      <Header hasLogo={true} />
      <View style={styles.content}>
        <Text style={styles.mainText}>Register</Text>
        <Text style={styles.secondaryText}>If you need any support <Text style={styles.link} onPress={() => {}}>Click here</Text></Text>
        <View style={styles.inputContent} >
          <TextInput style={styles.inputGroup} placeholderTextColor="#A7A7A7" placeholder="Full Name" />
          <TextInput style={styles.inputGroup} placeholderTextColor="#A7A7A7" placeholder="Enter Email" />
          <View style={styles.inputGroup}>
            <TextInput placeholderTextColor="#A7A7A7" placeholder="Password" />
            <EyeSlash size={24} color="#A7A7A7" />
          </View>
        </View>
        <TouchableOpacity style={styles.signInButton}><Text style={styles.signInButtonText}>Create Account</Text></TouchableOpacity>
        <AlternativeLogin />
      </View>
    </View>
  );
}
