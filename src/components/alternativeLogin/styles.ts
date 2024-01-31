import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  separator: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginTop: 25,
    width: '100%',
  },
  separatorText: {
    color: "#DCDCDC",
    fontSize: 12,
    fontWeight: '400',
  },
  line: {
    backgroundColor: '#757575',
    flex: 1,
    height: 1,
  },
  socialButtons: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 58,
    justifyContent: 'center',
    marginVertical: 50,
    width: '100%',
  },
  footerText: {
    color: '#DBDBDB',
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  link: {
    color: '#288CE9',
  }
})