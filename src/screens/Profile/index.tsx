import React, { useEffect, useState } from 'react';
import { ScrollView, Text, Image, View } from 'react-native'
import { Header, Footer } from 'app-components'
import { getUser, getUserPublicPlaylists } from 'app-services'
import { styles } from './styles'

interface UserProps {
  id: string,
  display_name: string,
  email: string,
  images: [
    {
      url: string
    },
    {
      url: string
    }
  ],
  followers: {
    total: number
  },
  follows: number
}

interface PlaylistsProps {
  items: [
    {
      id: string,
      name: string,
      images: [
        {
          url: string
        }
      ]
    }
  ]
}

export default function Profile() {
  const [userData, setUserData] = useState<UserProps | null>(null)
  const [publicPlaylists, setPublicPlaylists] = useState<PlaylistsProps | null>(null)

  async function getUserInfo() {
    try{
      const { data } = await getUser()
      setUserData({...data, follows: 28})
    } catch(e) {
      console.error(e)
    }
  }

  async function getPublicPlaylists() {
    try{
      const { data } = await getUserPublicPlaylists()
      setPublicPlaylists(data)
    } catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getUserInfo()
    getPublicPlaylists()
  }, [])

  function renderProfileContainer() {
    return (
      <View style={styles.infoContainer}>
        <View style={styles.profileContainer}>
          <Image style={styles.profileImage} source={{ uri: userData?.images[1]?.url }}/>
          <Text style={styles.emailText}>{userData?.email}</Text>
          <Text style={styles.nameText}>{userData?.display_name}</Text>
          <View style={styles.followsContainer}>
            <View style={styles.follows}>
              <Text style={styles.followsText}>{userData?.followers.total}</Text>
              <Text style={styles.followsLabel}>Followers</Text>
            </View>
            <View style={styles.follows}>
              <Text style={styles.followsText}>{userData?.follows}</Text>
              <Text style={styles.followsLabel}>Follows</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  function renderPlaylistContainer() {

    return (
      <View style={styles.playlistContainer}>
        <Text style={styles.playlistText}>Public Playlists</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.playlistList}>
            {publicPlaylists?.items?.map((playlist) => (
              <View style={styles.playlistItem} key={playlist.id}>
                <Image style={styles.playlistImage} source={{ uri: playlist.images[0].url }}/>
                <Text style={styles.playlistName}>{playlist.name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header hasLogo={true}/>
      {renderProfileContainer()}
      {renderPlaylistContainer()}
      <Footer currentPage='Profile'/>
    </View>
  );
}
