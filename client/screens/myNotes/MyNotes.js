import React, { useState } from "react";
import {  Text, View, Image, TextInput } from 'react-native';
import styles from "./styles";

const MyNotes = () => {
     const [description, setDescription] = useState("");

    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.title}>Mis Notas</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.text}>Utiliza este espacio para descargar tus emociones y recordar cada cambio positivo que has logrado </Text>

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
                    
                    placeholder="Escribe aquí tu descripción"
                    multiline
                    onChangeText={text => setDescription(text)} 
                    value={description} 
                    
                />
                </View>
            </View>
        </View>
    );
};

export default MyNotes;