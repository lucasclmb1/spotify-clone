import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1B1B',
    alignItems: 'center',
  },
  infoContainer: {
    alignItems: 'center',
    width: '100%',
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: '#343434',
    borderBottomLeftRadius: 66,
    borderBottomRightRadius: 66,
    width: '100%',
  },
  profileImage: {
    borderRadius: 50,
    height: 95,
    width: 95,
  },
  emailText: {
    color: '#D8D4D4',
    fontSize: 12,
    fontWeight: "400",
    marginVertical: 10,
  },
  nameText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'capitalize'
  },
  followsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 120,
    justifyContent: 'center',
    marginVertical: 20,
    width: '100%',
  },
  follows: {
    alignItems: 'center',
  },
  followsText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  followsLabel: {
    color: '#A1A1A1',
    fontSize: 14,
    fontWeight: '400',
  },
  playlistContainer: {
    flex: 1,
    padding: 25,
    marginBottom: 65,
    width: '100%',
  },
  playlistText: {
    color: '#D6D6D6',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 10,
    textTransform: 'uppercase'
  },
  playlistList: {
    width: '100%',
  },
  playlistItem: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    width: '100%',
  },
  playlistImage: {
    borderRadius: 15,
    height: 60,
    width: 60,
  },
  playlistName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 10,
    textTransform: 'capitalize'
  }
})
