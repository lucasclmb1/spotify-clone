import { StyleSheet, ViewStyle } from 'react-native'
import { baseButton } from 'app-styles'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1B1B',
    flex: 1,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 30,
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
    textAlign: 'center',
    textTransform: 'capitalize'
  },
  link: {
    color: '#38B432'
  },
  inputContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  inputGroup: {
    alignItems: 'center',
    borderColor: '#757575',
    borderRadius: 30,
    borderWidth: 1,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 27,
    width: '100%',
  },
  recoveryText: {
    color: '#AEAEAE',
    paddingHorizontal: 15,
    width: '100%'
  },
  signInButton: {
    ...baseButton,
    marginVertical: 20,
    marginHorizontal: 30,
    width: '100%'
  } as ViewStyle,
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  }
})