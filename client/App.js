import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './component/HomeScreen/HomeScreen';
import Bienvenida from './screens/bienvenida/Bienvenida';
import InfoViolence from './screens/InfoViolence/InfoViolence';
import TipOneFirsts from './component/Tip1/TipOneFirsts';
import TipOneSecond from './component/Tip1/TipOneSecond';
import Ingresar from './screens/ingresar/Ingresar';
import * as Font from 'expo-font';


const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

    const loadFonts = async () => {
    await Font.loadAsync({
      
      'BirthstoneBounce-Medium': require('./assets/fonts/BirthstoneBounce-Medium.ttf'),
      'BirthstoneBounce-Regular': require('./assets/fonts/BirthstoneBounce-Regular.ttf')
    });
    setFontsLoaded(true);
  };

  
  useEffect(() => {
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
        <Stack.Screen name="Tip1" component={TipOneFirsts} />
        <Stack.Screen name="TipOneSecond" component={TipOneSecond} />   
        <Stack.Screen name="HomeScreen" component={HomeScreen} />       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

