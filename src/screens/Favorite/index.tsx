import React, { useEffect, useState } from 'react';
import { ScrollView, Image, Text, View } from 'react-native'
import { Header, Footer } from 'app-components'
import { getUserSavedTracks } from 'app-services'
import { styles } from './styles'

export default function Favorite() {
  const [userFavoritesTracks, setUserFavoritesTracks] = useState<any[]>([])

  async function getUserFavoritesTracks() {
    try {
      const { data } = await getUserSavedTracks()
      setUserFavoritesTracks(data.items)
    } catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getUserFavoritesTracks()
  }, [])

  function renderSongsListContainer() {

    return (
      <View style={styles.songsListContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.songsList}>
            {userFavoritesTracks?.map((item) => {
              const currentTrack = item.track

              return (
                <View style={styles.songsListItem} key={currentTrack.id}>
                  <Image style={styles.songsListImage} source={{ uri: currentTrack.album.images[0].url }}/>
                  <Text style={styles.songsListName}>{currentTrack.name}</Text>
                </View>
              )
            })}
          </View>
        </ScrollView>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header hasOptionButton={true}/>
      <View style={styles.titleContainer}>
        <Text style={styles.mainText}>Favorite Tracks</Text>
        <Text style={styles.secondaryText}>{userFavoritesTracks?.length} Tracks</Text>
      </View>
      {renderSongsListContainer()}
      <Footer currentPage='Favorite'/>
    </View>
  );
}
