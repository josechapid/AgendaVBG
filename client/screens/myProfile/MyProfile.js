import React, { useState, useEffect } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { updateUserData } from '../../redux_toolkit/features/counter/Slice'; // Importa la acción de Redux para actualizar los datos del usuario

const MyProfile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState('');
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [loading, setLoading] = useState(true); // Estado de carga

  const userData = useSelector((state) => state.tip.user.data);  
  const userId = userData?.id;

  useEffect(() => {
    const loadUserData = async () => {
      if (!userId) return;

      setLoading(true);  
      try {
        const response = await axios.get(`https://agendavbg.onrender.com/user/${userId}`);
        const { name, user, email } = response.data;

        setNombre(name || '');   
        setUsuario(user || '');
        setCorreo(email || '');

        // Actualizar estado de Redux con los datos más recientes
        dispatch(updateUserData({ name, user, email, id: userId }));
      } catch (error) {
        console.error('Error al cargar los datos del usuario:', error);
      } finally {
        setLoading(false); 
      }
    };

    loadUserData();
  }, [userId, dispatch]);

  const handleSaveChanges = async () => {
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

      console.log(response.data.message); 
      
      dispatch(updateUserData({ name: nombre, user: usuario, email: correo, id: userId }));

      navigation.navigate("Main"); 
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  };

  if (loading) {
    
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Text style={styles.title}>Mi Perfil</Text>
        </View>
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

        <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
          <Text style={styles.buttonText}>Guardar cambios</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default MyProfile;