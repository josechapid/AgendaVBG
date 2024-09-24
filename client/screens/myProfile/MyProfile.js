
import React, { useState, useEffect } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateUserData } from '../../redux_toolkit/features/counter/Slice'; // Importa la acción de Redux para actualizar los datos del usuario

const MyProfile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState('');
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [loading, setLoading] = useState(true); // Estado de carga

  const userData = useSelector((state) => state.tip.user?.data);
  const userId = userData?.id;

  // Cargar datos del AsyncStorage cuando el componente se monta
  useEffect(() => {
    const loadUserDataFromStorage = async () => {
      
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        if (storedUserData) {
           console.log("Datos cargados de AsyncStorage:", JSON.parse(storedUserData));
          const { name, user, email, id } = JSON.parse(storedUserData);
          setNombre(name);
          setUsuario(user);
          setCorreo(email);
          dispatch(updateUserData({ name, user, email, id }));
        }
      } catch (error) {
        console.error('Error al cargar los datos del almacenamiento local:', error);
      }
    };

    loadUserDataFromStorage();
  }, [dispatch]);

  
  useEffect(() => {
    const loadUserData = async () => {
      if (!userId) return;

      setLoading(true);
      try {
        const response = await axios.get(`https://agendavbg-frp4.onrender.com/user/${userId}`);
        const { name, user, email } = response.data.data;
        console.log("Datos recibidos del servidor:", { name, user, email });

        setNombre(name || '');
        setUsuario(user || '');
        setCorreo(email || '');
       
        const userDataToStore = { name: name || '', user: user || '', email: email || '', id: userId };
      console.log("Datos que se guardarán en AsyncStorage:", userDataToStore);
        try{
           await AsyncStorage.setItem('userData', JSON.stringify(userDataToStore));
  console.log("Datos guardados en AsyncStorage:", userDataToStore);
        }catch(error){
           console.error("Error guardando en AsyncStorage:", error);
        }
 

        // Actualizar el estado de Redux con los datos más recientes
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
    console.log("Valores a guardar:", { nombre, usuario, correo });
    if (!userId) {
      console.error('ID de usuario no definido');
      return;
    }

    try {
      const response = await axios.patch(`https://agendavbg-frp4.onrender.com/user/${userId}`, {
        name: nombre,
        user: usuario,
        email: correo
      });

      console.log(response.data.message);

      // Actualizar Redux
      dispatch(updateUserData({ name: nombre, user: usuario, email: correo, id: userId }));

      // Guardar en AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify({ name: nombre, user: usuario, email: correo, id: userId }));

      navigation.navigate("Main"); // Navegar a otra pantalla después de guardar
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  };

  if (!userId) {
    return (
      <View style={styles.container}>
        <Text>Cargando usuario...</Text>
      </View>
    );
  }

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
};

export default MyProfile;