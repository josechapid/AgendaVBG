import React, { useState } from "react";
import { Text, View, Image, TextInput, Pressable, FlatList, Alert, BackHandler } from 'react-native';
import styles from "./styles";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { setTipTenSituation, setTipTenHowAct, setTipTenChange, clearTipTen, removeSituation, removeHowAct,removeChange  } from "../../redux_toolkit/features/counter/Slice";
import axios from "axios";


const TipTen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { situacion, como_actuo, cambio } = useSelector((state) => state.tip.tipTen);
    const userIdR = useSelector((state) => state.tip.user)
    

    const [tempSituation, setTempSituation] = useState("");
    const [tempHowAct, setTempHowAct] = useState("");
    const [tempChange, setTempChange] = useState("");
    useFocusEffect(
      React.useCallback(() => {
        const onBackPress = () => {
          return true; // Esto bloquea la acción de regresar
        };

        BackHandler.addEventListener("hardwareBackPress", onBackPress);

        return () => {
          BackHandler.removeEventListener("hardwareBackPress", onBackPress);
        };
      }, [])
    );

    const handleAddSituation = () => {
        if (tempSituation.trim() === "") {
            Alert.alert("Campo vacío", "Por favor, ingrese tu situacion.");
            
        }else{
            dispatch(setTipTenSituation(tempSituation));
            setTempSituation("");
        }
    };

    const handleAddHowAct = () => {
        if (tempHowAct.trim() === "") {
            Alert.alert("Campo vacío", "Por favor, ingrese como actua.");
            
        }else{
            dispatch(setTipTenHowAct(tempHowAct));
            setTempHowAct("");
        }
    };

    const handleAddChange = () => {
        if (tempChange.trim() === "") {
            Alert.alert("Campo vacío", "Por favor, ingrese su cambio.");
            
        }else{
            dispatch(setTipTenChange(tempChange));
            setTempChange("");
        }
    };

    const handleEnviarDatos = async () => {
         if (situacion.length === 0 || como_actuo.length === 0 || cambio.length === 0) {
      Alert.alert("Campos vacíos", "Por favor, complete todos los campos antes de enviar.");
      return;
    }
        try {

            const data = {
                user_id: userIdR.data.id,
                workshop_id: 10, 
                filled: true,
                response: {
                    situacion,
                    como_actuo,
                    cambio
                },
            };
            const response = await axios.post("https://agendavbg-frp4.onrender.com/response", data);
            dispatch(clearTipTen());
            navigation.navigate("FinalTip", { tipId: 10 });
        } catch (error) {
            console.error("Error al enviar los datos: ", error);
        }
    };

    const renderItem = ({ item, index }, removeAction) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
            <Pressable onPress={() => removeAction(index)}>
                <Text style={styles.removeButton}>X</Text>
            </Pressable>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.title}>Controlate</Text>
            </View>
            <View style={styles.section}>
                <Image
                    source={require("../../assets/img/tip10/Youcan.jpeg")}
                    style={styles.img}
                />
                <View style={styles.textSection}>
                    <Text style={styles.textCenter}>Reto 10: Controla tus impulsos</Text>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <View style={styles.description}>
                    <TextInput
                        placeholder="Situacion"
                        onChangeText={setTempSituation}
                        value={tempSituation}
                        style={styles.input}
                    />
                    <FlatList
                        data={situacion}
                        renderItem={(item) => renderItem(item, (index) => dispatch(removeSituation(index)))}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={styles.description}>
                    <TextInput
                        placeholder="Actuo"
                        onChangeText={setTempHowAct}
                        value={tempHowAct}
                        style={styles.input}
                    />
                    <FlatList
                        data={como_actuo}
                        renderItem={(item) => renderItem(item, (index) => dispatch(removeHowAct(index)))}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={styles.description}>
                    <TextInput
                        placeholder="Cambios"
                        onChangeText={setTempChange}
                        value={tempChange}
                        style={styles.input}
                    />
                    <FlatList
                        data={cambio}
                        renderItem={(item) => renderItem(item, (index) => dispatch(removeChange(index)))}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <Pressable onPress={() => { handleAddSituation(); handleAddHowAct(); handleAddChange(); }}>
                    <Text style={styles.button}>Generar</Text>
                </Pressable>
            </View>
            <Pressable style={styles.button} onPress={handleEnviarDatos}>
                <Text style={styles.buttonText}>Enviar</Text>
            </Pressable>
        </View>
    );
}

export default TipTen;