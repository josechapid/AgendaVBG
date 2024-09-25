import * as React from 'react';
import { View, Text, Image,TouchableOpacity, Pressable } from 'react-native';
import styles from './styles';
import tipFinal from "../../assets/json/tipFinal.json";
import images from '../../assets/json/imageMapFinal';


const FinalTip = ({route,  navigation }) => {
  const {tipId} =route.params;
  const tip= tipFinal.find(t=> t.id === tipId);
  const imagePath = images[tip.image];
    
     return (
       <View style={styles.container}>
         <View style={styles.topSection}>
           <Text style={styles.title}>{tip.title}</Text>
         </View>
         <Image source={imagePath} style={styles.img} />
         <View style={styles.textBox}>
           <Text style={styles.textTips}>{tip.textTip}</Text>
         </View>
         {/* <Text style={styles.phrase}>{textPhrase}</Text> */}
         
         <Pressable
           onPress={() => navigation.navigate("Main")}
           style={styles.button}
         >
           <Text style={styles.buttonText}>Finalizar</Text>
         </Pressable>
       </View>
     );
    
};

export default FinalTip;