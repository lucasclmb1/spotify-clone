import { Text, View } from 'react-native'
import { Header, Footer } from 'app-components'
import { styles } from './styles'

export default function Home() {

  return (
    <View style={styles.container}>
      <Header hasLogo={true}/>
      <Text style={styles.mainText}>Home</Text>
      <Footer currentPage='Home'/>
    </View>
  );
}
