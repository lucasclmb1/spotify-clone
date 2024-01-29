import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Header, Footer } from 'app-components'
import { getData, getUser } from 'app-services'
import { styles } from './styles'

export default function Profile() {

  async function getUserInfo() {
    try {
      const token = await getData('ACCESS_TOKEN')
      if (token) {
        const { data } = await getUser(token)
        console.log(data)
      }
    } catch (e: any) {
      console.error(e.message)
    }
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
