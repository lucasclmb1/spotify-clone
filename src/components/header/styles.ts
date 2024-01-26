import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    top: 40,
    width: '100%'	
  },
  backButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: 50,
    height: 32,
    justifyContent: 'center',
    width: 32,
  },
  invisibleView: {
    width: 32
  }
})