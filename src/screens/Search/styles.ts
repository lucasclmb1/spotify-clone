import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1B1B',
    alignItems: 'center',
  },
  inputContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 30,
    width: '100%'
  },
  inputGroup: {
    alignItems: 'center',
    borderColor: '#757575',
    borderRadius: 30,
    borderWidth: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 27,
    width: '100%',
  },
  inputText: {
    color: '#A7A7A7',
  },
  searchContent: {
    alignItems: 'center',
    height: '70%',
    justifyContent: 'center',
    width: '100%',
  },
  emptyResultsText: {
    color: '#A7A7A7',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    textAlign: 'center',
    width: '100%',
  },
  itemsList: {
    paddingHorizontal: 27,
    width: '100%',
  },
  itemContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  itemImage: {
    height: 50,
    width: 50,
  },
  textContainer: {
    paddingLeft: 15,
    width: '100%',
  },
  itemName: {
    color: '#F2F2F2',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    marginTop: 10,
    textTransform: 'capitalize'
  },
  itemAlbumInfo: {
    color: '#BABABA',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    textTransform: 'capitalize'
  }
})
