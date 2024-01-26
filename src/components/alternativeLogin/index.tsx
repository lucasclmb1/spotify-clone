import { Text, TouchableOpacity, View } from "react-native"
import { GoogleIcon, AppleIcon } from 'app-assets'
import { styles } from "./styles"

export default function AlternativeLogin() {
  return (
    <>
      <View style={styles.separator}>
        <View style={styles.line} />
        <Text style={styles.separatorText}>Or</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.socialButtons}>
        <TouchableOpacity>
          <GoogleIcon width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AppleIcon width={30} height={30} />
        </TouchableOpacity>
      </View>
      <Text style={styles.footerText}>Not a member? <Text style={styles.link} onPress={() => {}}>Register Now</Text></Text>
    </>
  );
}
