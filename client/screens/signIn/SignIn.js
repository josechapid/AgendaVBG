import React, {useState} from "react";
import {View, Text, TouchableOpacity,TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setNewUser } from "../../redux_toolkit/features/counter/Slice";
import axios from "axios";
import styles from "./styles";

function SignIn () {
    const navigation = useNavigation();
    const dispatch= useDispatch();
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("");

    const data= {email, password}

    async function handleLogin (){
      try {
        const response = await axios.post("https://agendavbg.onrender.com/login", data)
       
        if(response.data){
          dispatch(setNewUser(response.data));
          navigation.navigate("Main")
        } else{
          alert("no se encontro usuario")
        }
      } catch (error) {
        console.error("Error al enviar datos: ", error)
      }
    } 

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
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};


export default SignIn;