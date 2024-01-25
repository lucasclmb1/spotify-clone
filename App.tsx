import { StatusBar } from 'expo-status-bar'
import { GettingStarted } from './src/screens';

export default function App() {
  return (
    <>
      <GettingStarted />
      <StatusBar style="light" translucent />
    </>
  );
}
