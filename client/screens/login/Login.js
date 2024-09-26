import React, { useState } from "react";
import { View, Text, TextInput, Alert, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setNewUser } from "../../redux_toolkit/features/counter/Slice";
import {
  validateName,
  validateUser,
  validateDateOfBirth,
  validateAddress,
  validatePhone,
  validateEmail,
  validatePassword
} from "./validations"
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./styles";

function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors]=useState({
    name: "",
    user: "",
    dateOfBirth: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  
   const handleNameChange = (value) => {
     setName(value);
     setErrors((prevErrors) => ({
       ...prevErrors,
       name: validateName(value)
         ? ""
         : "Nombre inválido (solo letras y espacios).",
     }));
   };

   const handleUserChange = (value) => {
     setUser(value);
     setErrors((prevErrors) => ({
       ...prevErrors,
       user: validateUser(value)
         ? ""
         : "El usuario debe tener al menos 4 caracteres sin espacios.",
     }));
   };

   const handleDateOfBirthChange = (value) => {
     setDateOfBirth(value);
     setErrors((prevErrors) => ({
       ...prevErrors,
       dateOfBirth: validateDateOfBirth(value)
         ? ""
         : "Fecha inválida (ej. 26/10/1993).",
     }));
   };

   const handleAddressChange = (value) => {
     setAddress(value);
     setErrors((prevErrors) => ({
       ...prevErrors,
       address: validateAddress(value)
         ? ""
         : "La dirección debe tener al menos 5 caracteres.",
     }));
   };

   const handlePhoneChange = (value) => {
     setPhone(value);
     setErrors((prevErrors) => ({
       ...prevErrors,
       phone: validatePhone(value)
         ? ""
         : "El número de teléfono debe tener 10 dígitos.",
     }));
   };

   const handleEmailChange = (value) => {
     setEmail(value);
     setErrors((prevErrors) => ({
       ...prevErrors,
       email: validateEmail(value) ? "" : "Correo electrónico inválido.",
     }));
   };

   const handlePasswordChange = (value) => {
     setPassword(value);
     setErrors((prevErrors) => ({
       ...prevErrors,
       password: validatePassword(value)
         ? ""
         : "La contraseña debe tener al menos 6 caracteres.",
     }));
   };

   const handleConfirmPasswordChange = (value) => {
     setConfirmPassword(value);
     setErrors((prevErrors) => ({
       ...prevErrors,
       confirmPassword:
         value === password ? "" : "Las contraseñas no coinciden.",
     }));
   };

async function sendDates() {
  if (Object.values(errors).some((error) => error !== "")) {
    Alert.alert("Error", "Por favor corrige los errores antes de continuar.");
    return;
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
      "https://agendavbg-frp4.onrender.com/user",
      dates
    );
    
    if (response.data) {
      // Guardar los datos del usuario en AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify(dates));

      // Actualizar Redux (opcional si ya usas Redux)
      dispatch(setNewUser(response.data));

      // Navegar a otra pantalla
      navigation.navigate("Main");
    }
  } catch (error) {
    if (error.response) {
      const serverMessage = error.response.data.error;
      if (serverMessage.includes("ya existe un usuario con ese nombre o correo")) {
        Alert.alert("Error", "El nombre de usuario o el correo ya están en uso.");
      } else {
        Alert.alert("Error", serverMessage);
      }
    } else {
      Alert.alert("Error", "No se pueden enviar los datos: " + error.message);
    }
  }
}
 
  return (
    <ScrollView style={styles.scrollViewContainer}>
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
            onChangeText={handleNameChange}
          />
          {errors.name ? (
            <Text style={styles.errorText}>{errors.name}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            value={user}
            onChangeText={handleUserChange}
          />
          {errors.user ? (
            <Text style={styles.errorText}>{errors.user}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="Fecha de Nacimiento (DD/MM/YYYY) "
            value={dateOfBirth}
            onChangeText={handleDateOfBirthChange}
          />
          {errors.dateOfBirth ? (
            <Text style={styles.errorText}>{errors.dateOfBirth}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="Dirección"
            value={address}
            onChangeText={handleAddressChange}
          />
          {errors.address ? (
            <Text style={styles.errorText}>{errors.address}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="Teléfono"
            value={phone}
            onChangeText={handlePhoneChange}
            inputMode="numeric"
          />
          {errors.phone ? (
            <Text style={styles.errorText}>{errors.phone}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="Correo Electrónico"
            value={email}
            onChangeText={handleEmailChange}
            inputMode="email"
          />
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={handlePasswordChange}
            secureTextEntry
          />
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="Repetir Contraseña"
            value={confirmPassword}
            onChangeText={handleConfirmPasswordChange}
            secureTextEntry
          />
          {errors.confirmPassword ? (
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          ) : null}
          
          <Pressable style={styles.button} onPress={sendDates}>
            <Text style={styles.buttonText}>Enviar</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

export default Login;
