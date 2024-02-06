import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1B1B',
    alignItems: 'center',
  },
  newsContent: {
    paddingHorizontal: 30,
    width: '100%',
  },
  newsTitle: {
    color: '#F2F2F2',
    fontSize: 26,
    fontWeight: "700",
    lineHeight: 33,
    marginTop: 55,
    textTransform: 'capitalize'
  },
  newsList: {
    flexDirection: 'row',
    paddingTop: 15,
    width: '100%',
  },
  newsItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 20,
    maxWidth: 160
  },
  newsImage: {
    height: 130,
    width: 130,
  },
  newsName: {
    color: '#F2F2F2',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    marginTop: 10,
    textTransform: 'capitalize'
  },
  newsAlbumInfo: {
    color: '#BABABA',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    textTransform: 'capitalize'
  }
})
