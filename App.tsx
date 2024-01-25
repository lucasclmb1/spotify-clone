import { StatusBar } from 'expo-status-bar'
import { Login } from './src/screens';

export default function App() {
  return (
    <>
      <Login />
      <StatusBar style="light" translucent />
    </>
  );
}
