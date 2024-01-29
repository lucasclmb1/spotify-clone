import { Text, View } from 'react-native'
import { Header, Footer } from 'app-components'
import { styles } from './styles'

export default function Search() {

  return (
    <View style={styles.container}>
      <Header hasLogo={true}/>
      <Text style={styles.mainText}>Search</Text>
      <Footer currentPage='Search'/>
    </View>
  );
}
