import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 30,
    height: 80,
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
  optionButton: {
    alignItems: 'center',
    height: 32,
    justifyContent: 'center',
    width: 32
  },
  invisibleView: {
    width: 32
  },
  topText: {
    color: '#E6E6E6',
    fontSize: 20,
    fontWeight: '700',
  }
})