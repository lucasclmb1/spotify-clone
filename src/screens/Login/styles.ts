import { StyleSheet, ViewStyle } from 'react-native'
import { baseButton } from 'app-styles'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1B1B',
    flex: 1,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 50,
    top: 111,
    width: '100%'
  },
  mainText: {
    color: '#F2F2F2',
    fontSize: 26,
    fontWeight: "700",
    lineHeight: 33,
    marginTop: 55,
    textTransform: 'capitalize'
  },
  secondaryText: {
    color: '#A0A0A0',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    marginVertical: 25,
    textAlign: 'center'
  },
  signInButton: {
    ...baseButton,
    width: '90%'
  } as ViewStyle,
  buttonText: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '700',
    lineHeight: 33
  },
  billieLogin: {
    position: 'absolute',
    top: 430
  },
  unionTop: {
    position: 'absolute',
    left: 250
  },
  unionBottom: {
    position: 'absolute',
    left: 260,
    bottom: -2
  }
})