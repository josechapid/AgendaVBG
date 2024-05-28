import React, { useRef }  from 'react';
import { View, Text, Dimensions, Image,TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import styles from "./styles";
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const { width: viewportWidth } = Dimensions.get('window'); //para que cubra el ancho del dispositivo

const Ingresar = () => {
    const navigation = useNavigation();
    const carouselRef = useRef(null); 

    const entries = [ //array para el carrousel
    { description: "La violencia es el “uso intencional de la fuerza física o el poder real o como amenaza contra uno mismo, una persona, grupo o comunidad que tiene como resultado la probabilidad de daño psicológico, lesiones, la muerte, privación o mal desarrollo.", 
    title: 'Slide 1', image: require('../../assets/img/Slice_1.jpg') },
    {description: "La violencia es el “uso intencional de la fuerza física o el poder real o como amenaza contra uno mismo, una persona, grupo o comunidad que tiene como resultado la probabilidad de daño psicológico, lesiones, la muerte, privación o mal desarrollo.", 
    title: 'Slide 2', image: require('../../assets/img/Slice_2.jpg')  },
    {description: "La violencia es el “uso intencional de la fuerza física o el poder real o como amenaza contra uno mismo, una persona, grupo o comunidad que tiene como resultado la probabilidad de daño psicológico, lesiones, la muerte, privación o mal desarrollo.", 
    title: 'Slide 3', image: require('../../assets/img/Slice_3.jpg')  },
  ];


  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        loop
        width={viewportWidth}
        height={600}
        autoPlay={true}
        data={entries}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <ScrollView style={styles.descriptionContainer}>
                <Text style={styles.text} >{item.description}</Text>
            </ScrollView>
          </View>
        )}
      />
      <View style={styles.sectionLogin}>
        <View style={styles.buttonSec}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate("Bienvenida")}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        </View>
          <View style={styles.buttonSec}>
            <TouchableOpacity onPress={() => navigation.navigate("Bienvenida")}>
              <Text style={styles.loginText}>No tienes cuenta? Registrate aqui</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
    
  );
}



export default Ingresar;