import { StatusBar } from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans';
import { Routes } from '@routes/index';
import { Loading } from '@components/Loading';
import {THEME} from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular,NunitoSans_700Bold});
  return (
    <ThemeProvider theme={THEME}>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}


