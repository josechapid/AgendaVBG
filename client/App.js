import "react-native-gesture-handler";
import "react-native-reanimated";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Bienvenida from "./screens/bienvenida/Bienvenida";
import InfoViolence from "./screens/InfoViolence/InfoViolence";
import Ingresar from "./screens/ingresar/Ingresar";
// import TipFinalFour from "./screens/tipFour/TipFinalFour";
import TipPrueba from "./components/TipPrueba/TipPrueba.js";
import TipOne from "./screens/tipOne/tipOne";
import FinalTip from "./components/finaltip/FinalTip.js";
import TipFour from "./screens/tipFour/TipFour";
import TipFive from "./screens/tipFive/TipFive.js";
import TipSix from "./screens/tipSix/TipSix.js";
import * as Font from "expo-font";
import TipsScreen from "./components/Tip1/TipsScreen";
import TipOneSecond from "./components/Tip1/TipOneSecond";
import TipTwo from "./screens/tipTwo/tipTwo"; 
import TipThree from "./screens/tipThree/tipThree.js";
import Dates from "./screens/dates/Dates.js";
import MyNotes from "./screens/myNotes/MyNotes.js";
import MyProfile from "./screens/myProfile/MyProfile.js";
import AvatarCreator from "./components/avatarCreator/AvatarCreator.js"; 


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
        <Stack.Screen name="FinalTip" component={FinalTip}/>
        <Stack.Screen name="TipPrueba" component={TipPrueba} />
        <Stack.Screen name="TipOne" component={TipOne} />
        <Stack.Screen name="TipTwo" component={TipTwo} />
        <Stack.Screen name="TipThree" component={TipThree} />
        <Stack.Screen name="TipFour" component={TipFour}/>
        <Stack.Screen name="TipFive" component={TipFive}/>
        <Stack.Screen name="TipSix" component={TipSix}/>
        <Stack.Screen name="Dates" component={Dates}/>
        <Stack.Screen name="MyNotes" component={MyNotes}/>
        <Stack.Screen name="MyProfile" component={MyProfile}/>
        <Stack.Screen name="AvatarCreator" component={AvatarCreator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
