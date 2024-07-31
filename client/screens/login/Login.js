import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setNewUser } from "../../redux_toolkit/features/counter/Slice";
import axios from "axios";
import styles from "./styles";

function Login () {
    const navigation= useNavigation();
    const dispatch=useDispatch();
    const [name, setName] = useState("");
    const [user, setUser] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function sendDates(){
      if(password !== confirmPassword){
        Alert.alert("Las contraseñas no coinciden")
      }
      try {
        const dates = {
           name,
           user,
           dateOfBirth,
           address,
           phone,
           email,
          password,
        };
        const response = await axios.post(
          "http://192.168.1.17:3001/user",
          dates
        );
        if(response.data){
          dispatch(setNewUser(response.data));
          navigation.navigate("Main");
        }
      } catch (error) {
        console.error("No se pueden enviar los datos: ", error)
      }
    }
   /*  async function sendDates(){
      if(password !== confirmPassword){
        Alert.alert("Las contraseñas no coinciden")
      }
      try {
        const dates = {
           userId:1,
           name,
           user,
           dateOfBirth,
           address,
           phone,
           email,
           password,
        };
        console.log('estos son los datos',dates)
        
          dispatch(setNewUser(dates));
          navigation.navigate("Main");
        
      } catch (error) {
        console.error("No se pueden enviar los datos: ", error)
      }
    } */

    return (
      <View style={styles.login}>
        {/* ------------------------------------section logo y title */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Crea tu cuenta en </Text>
          <Text style={styles.titleInitial}>Renacer Juntas</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            value={user}
            onChangeText={setUser}
          />
          <TextInput
            style={styles.input}
            placeholder="Fecha de Nacimiento ej. 26 october 1993 "
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
          />
          <TextInput
            style={styles.input}
            placeholder="Dirección"
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            style={styles.input}
            placeholder="Teléfono"
            value={phone}
            onChangeText={setPhone}
            /* keyboardType="phone-pad" */
            inputMode="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Correo Electrónico"
            value={email}
            onChangeText={setEmail}
            /* keyboardType="email-address" */
            inputMode="email"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Repetir Contraseña"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={sendDates}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};


export default Login;