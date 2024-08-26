import React, { useState, useEffect } from "react";
import {  Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import axios from 'axios';


const MyProfile = () => {
  const navigation = useNavigation();
      const [nombre, setNombre] = useState('');
      const [usuario, setUsuario] = useState('');
      const [correo, setCorreo] = useState('');
      // const user = useSelector((state) => state.tip.user);
      const userId = useSelector((state) => state.tip.user.data.id);
       console.log("este es el userId", userId)
  
   useEffect(() => {
    
    if (userId.data) {
      const loadUserData = async () => {
        try {
          const response = await axios.get(`https://agendavbg.onrender.com/user/${userId.data}`);
          const { name, user, email } = response.data;
          setNombre(name);
          setUsuario(user);
          setCorreo(email);
        } catch (error) {
          console.error('Error al cargar los datos del usuario:', error);
        }
      };

      loadUserData();
    }
  }, [userId]);



  const handleSaveChanges = async () => {
    console.log("este es el user",userId)
     if (!userId) {
      console.error('ID de usuario no definido');
      return;
    }
    try {
      const response = await axios.patch(`https://agendavbg.onrender.com/user/${userId}`, {
        name: nombre,
        user: usuario,
        email: correo
      });
      console.log(response.data.message); // Maneja la respuesta según sea necesario
      navigation.navigate("Main"); // Navegar después de guardar los cambios
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  };
 

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Mi Perfil</Text>
      </View>
      {/* <Button
              title="Cambiar Avatar"
              onPress={() => navigation.navigate('Avatar')}
            /> */}
      <View>
        <Image
          source={require("../../assets/img/myProfile/avatarMujer.jpg")}
          style={styles.img}
        />
      </View>
      <View style={styles.section}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={(text) => setNombre(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={usuario}
          onChangeText={(text) => setUsuario(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={correo}
          onChangeText={(text) => setCorreo(text)}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Password")}>
          <Text style={styles.changePasswordText}>Cambiar Contraseña</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity
        style={styles.button}
        onPress={handleSaveChanges}
      >
        <Text style={styles.buttonText}>Guardar cambios</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MyProfile;