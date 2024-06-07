import { View, Text, Image, TextInput,TouchableOpacity } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';

function TipSix () {
    const navigation = useNavigation();
    const [description, setDescription] = useState("");

    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.title}>Piensa positivo</Text>
            </View>
            <View>
                <Image
                source={require("../../assets/img/tip6/positive.jpeg")}
                style={styles.img}
                />
                <View style={styles.textSection}>
                    <Text style={styles.text}>Como te sentiste</Text>
                </View>
            </View>
            <View style={styles.description}>
                
                <TextInput
                    
                    placeholder="Escribe aquí tu descripción"
                    multiline
                    onChangeText={text => setDescription(text)} 
                    value={description} 
                />
            </View>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate("FinalTip",{tipId: 6})}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
    )
}

export default TipSix;