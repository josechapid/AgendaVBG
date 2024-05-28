import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import PerfileScreen from './component/PerfileScreen/PerfileScreen'
import HomeScreen from './component/HomeScreen/HomeScreen';
import Bienvenida from './screens/bienvenida/Bienvenida';
import InfoViolence from './screens/InfoViolence/InfoViolence';
import tipOneFirsts from './component/Tip1/tipOneFirsts';
import tipOneSecond from './component/Tip1/tipOneSecond';
import Ingresar from './screens/ingresar/Ingresar';
import 'react-native-reanimated';
import * as Font from 'expo-font';


const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

    const loadFonts = async () => {
    await Font.loadAsync({
      
      'BirthstoneBounce-Medium': require('./assets/fonts/BirthstoneBounce-Medium.ttf'),
      'BirthstoneBounce-Regular': require('./assets/fonts/BirthstoneBounce-Regular.ttf')
    });
    setFontsLoaded(true);
  };

  
  React.useEffect(() => {
    loadFonts();
  }, []);

  
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Bienvenida'>
        <Stack.Screen name="Bienvenida" component={Bienvenida} options={{ headerShown: false}} />  
        <Stack.Screen name="Ingresar" component={Ingresar}/>
        <Stack.Screen name="Infoviolence" component={InfoViolence} />
        <Stack.Screen name="Tip1" component={tipOneFirsts} />
        <Stack.Screen name="TipOneSecond" component={tipOneSecond} />           

      </Stack.Navigator>
    </NavigationContainer>
  );
}

