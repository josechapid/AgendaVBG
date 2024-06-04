import * as React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';
import styles from './styles';

const FinalTip = ({title,image,textTip,textPhrase,onFinish}) => {
     return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <Image source={image} style={styles.img} />
            <View style={styles.textBox}>
            <Text style={styles.textTips}>{textTip}</Text>
            </View>
            {/* <Text style={styles.phrase}>{textPhrase}</Text> */}
            <TouchableOpacity onPress={onFinish} style={styles.button}>
                <Text style={styles.buttonText}>Finalizar</Text>
            </TouchableOpacity>
        </View>
            
        
    );
    
};

export default FinalTip;