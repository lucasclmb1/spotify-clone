import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0C0C',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute'
  },
  logo: {
    marginTop: 40,
    width: 196,
    height: 59
  },
  textContainer: {
    alignItems: 'center',
    top: 450,
    paddingHorizontal: 53
  },
  mainText: {
    color: '#DADADA',
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 33,
    textTransform: 'capitalize',
  },
  secondaryText: {
    color: '#797979',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    marginVertical: 21,
    textAlign: 'center'
  },
  getStartedButton: {
    alignItems: 'center',
    backgroundColor: '#42C83C',
    borderRadius: 30,
    height: 92,
    justifyContent: 'center',
    width: 329
  },
  getStartedText: {
    color: '#F6F6F6',
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 29,
    textTransform: 'capitalize',
  }
})
