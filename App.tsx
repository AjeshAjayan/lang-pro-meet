import { PaperProvider } from 'react-native-paper';
import { theme } from './features/theme';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './features/login/page/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './features/home/page/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
