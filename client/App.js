// dependencias y hooks
import "react-native-gesture-handler";
import "react-native-reanimated";
import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {store, persistor }from "./redux_toolkit/store/store.js"

//Componentes
import Bienvenida from "./screens/bienvenida/Bienvenida";
import Ingresar from "./screens/ingresar/Ingresar";
import Login from "./screens/login/Login.js";
import SingIn from "./screens/signIn/SignIn.js"
import HomeScreen from "./components/HomeScreen/HomeScreen";
import InfoViolence from "./screens/InfoViolence/InfoViolence";
import TipOne from "./screens/tipOne/tipOne";
import TipTwo from "./screens/tipTwo/tipTwo"; 
import TipThree from "./screens/tipThree/tipThree.js";
import TipFour from "./screens/tipFour/TipFour";
import TipFive from "./screens/tipFive/TipFive.js";
import TipSix from "./screens/tipSix/TipSix.js";
import TipSeven from "./screens/tipSeven/tipSeven.js";
import TipEight from "./screens/tipEight/tipEight.js";
import TipNine from "./screens/tipNine/tipNine.js";
import FinalTip from "./components/finaltip/FinalTip.js";
import TipsScreen from "./components/Tip1/TipsScreen";
import Rutes from "./screens/rutes/rutes.js"
import TipTen from "./screens/tipTen/TipTen.js"
import TipEleven from "./screens/tipEleven/TipEleven.js";
import MyDates from "./screens/myDates/MyDates.js";
import MyNotes from "./screens/myNotes/MyNotes.js";
import MyProfile from "./screens/myProfile/MyProfile.js";
import Avatar from "./components/Avatar.js";
import Password from "./screens/password/Password.js";
import HowDoIFeel from "./screens/howDoIFeel/howDoIFeel.js"
import Feedback from "./components/feedback/Feedback.js";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Info") {
            iconName = "bookmark-outline";
          } else if (route.name === "Rutes") {
            iconName = "map";
          }
            else if (route.name === "MyDates") {
            iconName = "calendar";
          } else if (route.name === "MyNotes") {
            iconName = "book";
          } else if (route.name === "MyProfile") {
            iconName = "person";
          } 
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#F4A261", // Fondo de la barra
          borderTopWidth: 0, // Eliminar la línea superior
          elevation: 0, // Eliminar sombra en Android
        },
        tabBarLabelStyle: {
          fontSize: 10, // Tamaño de la fuente del texto
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Info" component={InfoViolence} />
      <Tab.Screen name="Rutes" component={Rutes} />
      <Tab.Screen name="MyDates" component={MyDates} />
      <Tab.Screen name="MyNotes" component={MyNotes} />
      <Tab.Screen name="MyProfile" component={MyProfile} />
    </Tab.Navigator>
  );
}
      

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "BirthstoneBounce-Medium": require("./assets/fonts/BirthstoneBounce-Medium-abcdef123456.ttf"),
      "BirthstoneBounce-Regular": require("./assets/fonts/BirthstoneBounce-Regular-abcdef123457.ttf"),
      "EduVICWANTBeginner-Medium": require("./assets/fonts/EduVICWANTBeginner-Medium.ttf"),
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
    <Provider store={store}>
      <PersistGate
        loading={
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        }
        persistor={persistor}
      >
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Bienvenida">
            <Stack.Screen
              name="Bienvenida"
              component={Bienvenida}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ingresar"
              component={Ingresar}
              options={{ headerShown: true, headerLeft: null }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: true, headerLeft: null }}
            />
            <Stack.Screen
              name="SingIn"
              component={SingIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={MyTabs}
              options={{ headerShown: false }}
            />

            <Stack.Screen name="TipsScreen" component={TipsScreen} />
            <Stack.Screen
              name="FinalTip"
              component={FinalTip}
              options={{ headerShown: true, headerLeft: null }}
            />
            <Stack.Screen
              name="TipOne"
              component={TipOne}
              options={{ headerShown: true, headerLeft: null }}
            />
            <Stack.Screen
              name="TipTwo"
              component={TipTwo}
              options={{ headerShown: true, headerLeft: null }}
            />
            <Stack.Screen
              name="TipThree"
              component={TipThree}
              options={{ headerShown: true, headerLeft: null }}
            />
            <Stack.Screen
              name="TipFour"
              component={TipFour}
              options={{ headerShown: true, headerLeft: null }}
            />
            <Stack.Screen
              name="TipFive"
              component={TipFive}
              options={{ headerShown: true, headerLeft: null }}
            />
            <Stack.Screen
              name="TipSix"
              component={TipSix}
              options={{ headerShown: true, headerLeft: null }}
            />
            <Stack.Screen
              name="TipSeven"
              component={TipSeven}
              options={{ headerShown: true, headerLeft: null }}
            />
            <Stack.Screen
              name="TipEight"
              component={TipEight}
              options={{ headerShown: true, headerLeft: null }}
            />
            <Stack.Screen
              name="TipNine"
              component={TipNine}
              options={{ headerShown: true, headerLeft: null }}
            />
            <Stack.Screen name="Avatar" component={Avatar} />
            <Stack.Screen name="Password" component={Password} />
            <Stack.Screen
              name="TipTen"
              component={TipTen}
              options={{ headerShown: true, headerLeft: null }}
            />
            <Stack.Screen
              name="TipEleven"
              component={TipEleven}
              options={{ headerShown: true, headerLeft: null }}
            />
            <Stack.Screen name="HowDoIFeel" component={HowDoIFeel} />
            <Stack.Screen name="Feedback" component={Feedback} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
