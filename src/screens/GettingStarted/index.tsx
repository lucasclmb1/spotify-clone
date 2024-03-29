import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Billie, SpotifyLogo } from 'app-assets'
import { PAGE_NAMES } from 'app-constants'
import { styles } from './styles'

export default function GettingStarted() {
  const navigation = useNavigation()

  const handleGetStarted = () => {
    navigation.navigate(PAGE_NAMES.LOGIN)
  }

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={Billie}/>
      <SpotifyLogo style={styles.logo} />
      <View style={styles.textContainer} >
        <Text style={styles.mainText}>Enjoy listening to music</Text>
        <Text style={styles.secondaryText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus sed phasellus. 
          Cursus ornare id scelerisque aliquam.
        </Text>
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.getStartedText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
