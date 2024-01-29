import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import { GettingStarted, Login, Register, SignIn, Home, Search, Favorite, Profile } from './src/screens'

const Stack = createStackNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GettingStarted">
          <Stack.Screen name="GettingStarted" component={GettingStarted} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
          <Stack.Screen name="Favorite" component={Favorite} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" translucent />
    </>
  );
}
