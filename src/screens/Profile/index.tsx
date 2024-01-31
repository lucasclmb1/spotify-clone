import React, { useEffect } from 'react';
import { Text, View } from 'react-native'
import { Header, Footer } from 'app-components'
import { getUser } from 'app-services'
import { styles } from './styles'

export default function Profile() {

  async function getUserInfo() {
    const user = await getUser()
    console.log(user)
  }

  useEffect(() => {
    getUserInfo()
  }, []);

  return (
    <View style={styles.container}>
      <Header hasLogo={true}/>
      <Text style={styles.mainText}>Profile</Text>
      <Footer currentPage='Profile'/>
    </View>
  );
}
