import { useState } from 'react'
import { TextInput, Text, Image, View, ScrollView } from 'react-native'
import { MagnifyingGlass } from 'phosphor-react-native'
import { Header, Footer } from 'app-components'
import { getSearchResults } from 'app-services'
import { styles } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface SearchResultsProps {
  name: string
  id: string
  images: [
    {
      url: string
    }
  ],
  album: {
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
}

export default function Search() {
  const [searchInput, setSearchInput] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResultsProps[]>([])

  async function fetchSearchResults() {
    try{
      const { data } = await getSearchResults(searchInput)
      setSearchResults(data.tracks.items)
    } catch(e) {
      console.error(e)
    }
  }

  return (
    <View style={styles.container}>
      <Header hasOptionButton={true} hasLogo={true}/>
      <View style={styles.inputContent}>
        <View style={styles.inputGroup}>
          <TextInput style={styles.inputText} onChangeText={setSearchInput} placeholderTextColor="#A7A7A7" placeholder="Search" />
          <TouchableOpacity onPress={fetchSearchResults}>
            <MagnifyingGlass size={24} color="#A7A7A7" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchContent}>
        {searchResults.length === 0 ? 
          <Text style={styles.emptyResultsText}>No search results</Text> :
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.itemsList}>
              {searchResults.map((item) => (
                <View style={styles.itemContainer} key={item.id}>
                  <Image style={styles.itemImage} source={{ uri: item.album.images[0].url }}></Image>
                  <View style={styles.textContainer}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemAlbumInfo}>{item.album.album_type} • {item.album.artists[0].name}</Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>}
      </View>
      <Footer currentPage='Search'/>
    </View>
  );
}
