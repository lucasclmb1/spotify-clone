import { TouchableOpacity, Text, View } from "react-native"
import { CaretLeft, DotsThreeVertical } from "phosphor-react-native"
import { useNavigation } from '@react-navigation/native'
import { SpotifyLogo } from 'app-assets'
import { styles } from "./styles";

interface HeaderProps {
  hasLogo?: boolean
  hasOptionButton?: boolean
  centerText?: string
  backgroundColor?: string
}

export default function Header({ hasLogo = false, hasOptionButton = false, backgroundColor = '', centerText = '' }: HeaderProps) {
  const navigation = useNavigation()

  const handleBack = () => { 
    navigation.goBack()
  }

  return (
    <View style={[styles.header, { backgroundColor: backgroundColor }]}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <CaretLeft size={24} color="#DDDDDD" />
      </TouchableOpacity>
      {hasLogo && <SpotifyLogo width={100} height={33} />}
      {centerText && <Text style={styles.topText}>{centerText}</Text>}
      {hasOptionButton ? 
        <TouchableOpacity style={styles.optionButton}>
          <DotsThreeVertical size={28} color="#DDDDDD"/>
        </TouchableOpacity> 
        : <View style={styles.invisibleView}></View>}
    </View>
  );
}
