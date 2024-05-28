import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import PerfileScreen from './component/PerfileScreen/PerfileScreen'
import HomeScreen from './component/HomeScreen/HomeScreen';
import Bienvenida from './screens/bienvenida/Bienvenida';
import InfoViolence from './component/InfoViolence/InfoViolence';
import tipOneFirsts from './component/Tip1/tipOneFirsts';
import tipOneSecond from './component/Tip1/tipOneSecond';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <View>
        <Bienvenida/>
      </View> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ fromChild: "Initial" }}
        />
        <Stack.Screen name="Profile" component={PerfileScreen} />
        <Stack.Screen name="Infoviolence" component={InfoViolence} />
        <Stack.Screen name="Tip1" component={tipOneFirsts} />
        <Stack.Screen name="TipOneSecond" component={tipOneSecond} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

