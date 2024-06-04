import "react-native-gesture-handler";
import "react-native-reanimated";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Bienvenida from "./screens/bienvenida/Bienvenida";
import InfoViolence from "./screens/InfoViolence/InfoViolence";
import Ingresar from "./screens/ingresar/Ingresar";
import TipFinalFour from "./screens/tipFour/TipFinalFour";
// import FinalTip from './component/finaltip/FinalTip'
import * as Font from "expo-font";
import TipsScreen from "./components/Tip1/TipsScreen";
import TipOneSecond from "./components/Tip1/tipOneSecond";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "BirthstoneBounce-Medium": require("./assets/fonts/BirthstoneBounce-Medium.ttf"),
      "BirthstoneBounce-Regular": require("./assets/fonts/BirthstoneBounce-Regular.ttf"),
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
      <Stack.Navigator initialRouteName="Bienvenida">
        <Stack.Screen
          name="Bienvenida"
          component={Bienvenida}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Ingresar" component={Ingresar} />
        <Stack.Screen name="Infoviolence" component={InfoViolence} />
        <Stack.Screen name="TipOneSecond" component={TipOneSecond} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TipsScreen" component={TipsScreen} />
        <Stack.Screen name="TipFinalFour" component={TipFinalFour} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
