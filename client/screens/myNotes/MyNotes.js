import React, { useState, useEffect } from "react";
import {  Text, View, Image, TextInput, TouchableOpacity, Alert,FlatList } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import {useSelector} from "react-redux";
import styles from "./styles";

const MyNotes = () => {
     const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState([]);
    const userId = useSelector((state) => state.tip.user.data.id);
    
    

    const fetchNotes = async () => {
    try {
      const response = await fetch('https://agendavbg.onrender.com/mynotes');
      const data = await response.json();
      console.log("Notes fetched:", data);
      setNotes(data);
    } catch (error) {
      Alert.alert('Error', 'No se pudieron cargar las notas');
    }
  };
    
      const handleSave = async () => {
    try {
      const response = await fetch('https://agendavbg.onrender.com/mynotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, userId}),
      });

      if (response.ok) {
        const data = await response.json();
        Alert.alert('Nota guardada', 'Tu nota ha sido guardada exitosamente');
        // Limpiar el formulario 
        setTitle('');
        setDescription('');
        fetchNotes();
      } else {
        throw new Error('Error al guardar la nota');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

    const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://agendavbg.onrender.com/mynotes/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        Alert.alert('Nota eliminada', 'Tu nota ha sido eliminada exitosamente');
        fetchNotes(); // para actualizar las notas despues de eliminarlas.
      } else {
        throw new Error('Error al eliminar la nota');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.note}>
      <Text style={styles.noteTitle}>{item.title}</Text>
      <Text style={styles.noteDescription}>{item.description}</Text>
      <TouchableOpacity 
        style={styles.deleteButton}
        onPress={() => handleDelete(item.id)}>
        <Text style={styles.deleteButtonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

    return (
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <Text style={styles.title}>Mis Notas</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.text}>
              Utiliza este espacio para descargar tus emociones y recordar cada
              cambio positivo que has logrado{" "}
            </Text>

            <Image
              source={require("../../assets/img/MyNotes.jpeg")}
              style={styles.img}
            />
            <View style={styles.textSection}>
              <Text style={styles.textCenter}>Escribe tus notas</Text>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.description}>
              <TextInput
                placeholder="Título de la nota"
                onChangeText={(text) => setTitle(text)}
                value={title}
              />
              <TextInput
                placeholder="Escribe aquí tu descripción"
                multiline
                onChangeText={(text) => setDescription(text)}
                value={description}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Guardar nota</Text>
          </TouchableOpacity>
          <FlatList
            data={notes}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={styles.notesList}
          />
        </View>
      </ScrollView>
    );
};

export default MyNotes;