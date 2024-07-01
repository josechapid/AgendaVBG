import React, { useState } from "react";
import {  Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

const MyProfile = () => {
  const navigation = useNavigation();
      const [nombre, setNombre] = React.useState('');
      const [usuario, setUsuario] = React.useState('');
      const [correo, setCorreo] = React.useState('');

  return(
        <View style={styles.container}>
          <View style={styles.topSection}>
            <Text style={styles.title}>Mi Perfil</Text>
          </View>
            <Button
              title="Cambiar Avatar"
              onPress={() => navigation.navigate('Avatar')}
            />
          <View style={styles.section}>
        <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={text => setNombre(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={usuario}
        onChangeText={text => setUsuario(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={correo}
        onChangeText={text => setCorreo(text)}
      />
       <TouchableOpacity onPress={() => navigation.navigate('Password')}>
        <Text style={styles.changePasswordText}>Cambiar Contraseña</Text>
      </TouchableOpacity>
        </View>
         <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate("Main")}>
            <Text style={styles.buttonText}>Guardar cambios</Text>
          </TouchableOpacity>
        </View>
    )
}

export default MyProfile;