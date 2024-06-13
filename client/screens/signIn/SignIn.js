import React, {useState} from "react";
import {View, Text,Image, TouchableOpacity,TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

function SignIn () {
    const navigation = useNavigation();
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("");

    return (
      <View style={styles.loginContainer}>
        {/* ------------------------------------section logo y title */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Hola! </Text>
          <Text style={styles.titleInitial}>Ingresa a tu cuenta</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo electronico"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};


export default SignIn;