import { TouchableOpacity, View } from "react-native"
import { CaretLeft } from "phosphor-react-native"
import { useNavigation } from '@react-navigation/native'
import { SpotifyLogo } from 'app-assets'
import { styles } from "./styles";

export default function Header({ hasLogo = false }) {
  const navigation = useNavigation()

  const handleBack = () => { 
    navigation.goBack()
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <CaretLeft size={24} color="#DDDDDD" />
      </TouchableOpacity>
      {hasLogo && <SpotifyLogo width={100} height={33} />}
      <View style={styles.invisibleView}></View>
    </View>
  );
}
