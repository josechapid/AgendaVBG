import React, { useState, useEffect } from "react";
import {  Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

const TipEleven = () => {
    const navigation = useNavigation();
    
    return(
        <View>
            <View style={styles.topSection}>
                <Text style={styles.title}>Empoderate</Text>
            </View>
        </View>
    )
}

export default TipEleven;