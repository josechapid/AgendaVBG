import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
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

    const handleAddSituation = () => {
        if (tempSituation.trim()) {
            dispatch(setTipTenSituation(tempSituation));
            setTempSituation("");
        }
    };

    const handleAddHowAct = () => {
        if (tempHowAct.trim()) {
            dispatch(setTipTenHowAct(tempHowAct));
            setTempHowAct("");
        }
    };

    const handleAddChange = () => {
        if (tempChange.trim()) {
            dispatch(setTipTenChange(tempChange));
            setTempChange("");
        }
    };

    const handleEnviarDatos = async () => {

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
            <TouchableOpacity onPress={() => removeAction(index)}>
                <Text style={styles.removeButton}>X</Text>
            </TouchableOpacity>
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
                <TouchableOpacity onPress={() => { handleAddSituation(); handleAddHowAct(); handleAddChange(); }}>
                    <Text style={styles.button}>Generar</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleEnviarDatos}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default TipTen;