import React, { useEffect, useState } from 'react'
import { Text, Image, ScrollView, View } from 'react-native'
import { Header, Footer } from 'app-components'
import { getNewReleases } from 'app-services'
import { styles } from './styles'

interface NewReleasesProps {
  items: [
    {
      id: string
      name: string
      album_type: string
      artists: [
        {
          name: string
        }
      ]
      images: [
        {
          url: string
        }
      ]
    }
  ]
}

export default function Home() {
  const [userNewReleases, setUserNewReleases] = useState<NewReleasesProps | null>(null)

  async function fetchNewReleases() {
    try{
      const { data } = await getNewReleases()
      setUserNewReleases(data?.albums)
    } catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchNewReleases()
  }, [])

  return (
    <View style={styles.container}>
      <Header hasLogo={true} hasOptionButton={true}/>
      <View style={styles.newsContent}>
        <Text style={styles.newsTitle}>New Releases</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.newsList}>
            {userNewReleases?.items.map((album) => (
              <View style={styles.newsItem} key={album.id}>
                <View>
                  <Image style={styles.newsImage} source={{ uri: album.images[0].url }}></Image>
                  <View>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.newsName}>{album.name}</Text>
                    <Text style={styles.newsAlbumInfo}>{album.album_type} • {album.artists[0].name}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <Footer currentPage='Home'/>
    </View>
  );
}
