import { Text, View } from 'react-native'
import { Header, Footer } from 'app-components'
import { styles } from './styles'

export default function Search() {

  return (
    <View style={styles.container}>
      <Header hasOptionButton={true} centerText='Search'/>
      <Footer currentPage='Search'/>
    </View>
  );
}
