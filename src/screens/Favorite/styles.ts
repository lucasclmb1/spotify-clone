import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1B1B',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 25,
    paddingVertical: 15,
    width: '100%',
  },
  mainText: {
    color: '#F2F2F2',
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 33,
    textTransform: 'capitalize'
  },
  secondaryText: {
    color: '#A0A0A0',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    textAlign: 'center'
  },
  songsListContainer: {
    flex: 1,
    paddingHorizontal: 25,
    width: '100%',
  },
  songsList: {
    width: '100%',
  },
  songsListItem: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    width: '100%',
  },
  songsListImage: {
    borderRadius: 15,
    height: 60,
    width: 60,
  },
  songsListName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 10,
    textTransform: 'capitalize'
  }
})
