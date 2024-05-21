import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import PerfileScreen from './component/PerfileScreen/PerfileScreen'
import HomeScreen from './component/HomeScreen/HomeScreen';
import Bienvenida from './screens/bienvenida/Bienvenida';
import Ingresar from './screens/ingresar/Ingresar';
import 'react-native-reanimated';

const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Bienvenida'>
        <Stack.Screen name="Bienvenida" component={Bienvenida} options={{ headerShown: false}} />  
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{fromChild: 'Initial'}} />
        <Stack.Screen name="Profile" component={PerfileScreen}/>
        <Stack.Screen name="Ingresar" component={Ingresar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

