import AsyncStorage from '@react-native-async-storage/async-storage'

const saveData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.error('Error while saving data:', error)
  }
}

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value
    } else {
      return null
    }
  } catch (error) {
    console.error('Error while fetching data:', error)
  }
}

export { saveData, getData }
