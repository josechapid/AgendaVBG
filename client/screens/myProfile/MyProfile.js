
import React, { useState, useEffect } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator, Modal, FlatList, Platform } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateUserData } from '../../redux_toolkit/features/counter/Slice'; // Importa la acción de Redux para actualizar los datos del usuario
import { Avatar } from 'react-native-elements';


const avatarImages = [
  require('../../assets/img/myProfile/avatar1.jpg'),
  require('../../assets/img/myProfile/avatar2.jpg'),
  require('../../assets/img/myProfile/avatar3.jpg'),
  require('../../assets/img/myProfile/avatar4.jpg'),
];

const MyProfile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState('');
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [avatar, setAvatar] = useState(''); //para avatar
  const [loading, setLoading] = useState(true); // Estado de carga
  const [modalVisible, setModalVisible] = useState(false); // Estado para el modal

  const userData = useSelector((state) => state.tip.user?.data);
  const userId = userData?.id;

  // Cargar datos del AsyncStorage cuando el componente se monta
  useEffect(() => {
    const loadUserDataFromStorage = async () => {
      
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        if (storedUserData) {
           console.log("Datos cargados de AsyncStorage:", JSON.parse(storedUserData));
          const { name, user, email, avatar, id } = JSON.parse(storedUserData);
          setNombre(name);
          setUsuario(user);
          setCorreo(email);
          setAvatar(avatar);
          dispatch(updateUserData({ name, user, email,avatar, id }));
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
        const { name, user, email, avatar } = response.data.data;
        console.log("Datos recibidos del servidor:", { name, user, email, avatar });

        setNombre(name || '');
        setUsuario(user || '');
        setCorreo(email || '');
        setAvatar(avatar || ''); //del servidor
       
        const userDataToStore = { name: name || '', user: user || '', email: email || '',avatar: avatar || '', id: userId };
      console.log("Datos que se guardarán en AsyncStorage:", userDataToStore);
        try{
           await AsyncStorage.setItem('userData', JSON.stringify(userDataToStore));
  console.log("Datos guardados en AsyncStorage:", userDataToStore);
        }catch(error){
           console.error("Error guardando en AsyncStorage:", error);
        }
 

        // Actualizar el estado de Redux con los datos más recientes
        dispatch(updateUserData({ name, user, email, avatar, id: userId }));
      } catch (error) {
        console.error('Error al cargar los datos del usuario:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, [userId, dispatch]);

  
  const handleSaveChanges = async () => {
    console.log("Valores a guardar:", { nombre, usuario, correo, avatar });
    if (!userId) {
      console.error('ID de usuario no definido');
      return;
    }

    try {
      const response = await axios.patch(`https://agendavbg-frp4.onrender.com/user/${userId}`, {
        name: nombre,
        user: usuario,
        email: correo,
        avatar: avatar
      });

      console.log(response.data.message);

      // Actualizar Redux
      dispatch(updateUserData({ name: nombre, user: usuario, email: correo,avatar, id: userId }));

      // Guardar en AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify({ name: nombre, user: usuario, email: correo,avatar, id: userId }));

      navigation.navigate("Main"); // Navegar a otra pantalla después de guardar
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  };

  const handleAvatarSelect = (image) => {
  let imageUri;
  
  if (Platform.OS === 'web') {
    // Usa el nombre de archivo directamente para imágenes locales en la web
    imageUri = image.uri || require("../../assets/img/myProfile/avatar1.jpg");
  } else {
    imageUri = Image.resolveAssetSource(image).uri;
  }
  
  console.log("Avatar seleccionado:", imageUri);
  setAvatar(imageUri);
  setModalVisible(false);
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
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Avatar
            rounded
            size="large"
            source={avatar ? { uri: avatar } : require("../../assets/img/myProfile/avatar1.jpg")}
            containerStyle={styles.img}
          />
          <Text>Seleccionar Avatar</Text>
        </TouchableOpacity>

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

       {/* Modal para seleccionar avatar */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <FlatList
            data={avatarImages}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleAvatarSelect(item)}>
                <Avatar
                  rounded
                  size="large"
                  source={item}
                  containerStyle={styles.avatarItem}
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
          />
        </View>
      </Modal>
    </ScrollView>
  );
};

export default MyProfile;