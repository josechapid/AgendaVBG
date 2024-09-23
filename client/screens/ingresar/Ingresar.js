import React, { useRef }  from 'react';
import { View, Text, Dimensions, Image,TouchableOpacity, Pressable } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import styles from "./styles";
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const { width: viewportWidth } = Dimensions.get('window'); //para que cubra el ancho del dispositivo

const Ingresar = () => {
  const navigation = useNavigation();
  const carouselRef = useRef(null);
  const entries = [
    {
      description:
        "La violencia contra la mujer -especialmente la ejercida por su pareja y la violencia sexual- constituye un grave problema de salud pública y una violación de los derechos humanos de las mujeres. La violencia puede afectar negativamente la salud física, mental, sexual y reproductiva de las mujeres.",
      title: "Datos Clave",
      image: require("../../assets/img/carousel/Slice_1.jpg"),
    },
    {
      description:
        "Las estimaciones publicadas por la OMS indican que alrededor de una de cada tres mujeres en las Américas han sufrido violencia física y/o sexual de pareja o violencia sexual por terceros en algún momento de su vida.",
      title: "Datos Clave",
      image: require("../../assets/img/carousel/Slice_2.jpg"),
    },
    {
      description:
        "El sistema de salud puede desempeñar un papel vital en responder y prevenir la violencia contra las mujeres y las niñas. Este papel incluye identificar el abuso temprano, proporcionar atención y apoyo a las sobrevivientes, y referir a las mujeres a servicios adecuados e informados dentro y fuera del sistema sanitario",
      title: "La violencia se puede prevenir",
      image: require("../../assets/img/carousel/Slice_3.jpg"),
    },
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
        scrollAnimationDuration={3000}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} resizeMode='cover' />
            <Text style={styles.title}>{item.title}</Text>
            <ScrollView style={styles.descriptionContainer}>
              <Text style={styles.text}>{item.description}</Text>
            </ScrollView>
          </View>
        )}
      />
      <View style={styles.sectionLogin}>
        <View style={styles.buttonSec}>
          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("SingIn")}
          >
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity> */}
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("SingIn")}
          >
            <Text style={styles.buttonText}>Ingresar</Text>
          </Pressable>
        </View>
        <View style={styles.buttonSec}>
          {/* <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}>
              No tienes cuenta? Registrate aqui
            </Text>
          </TouchableOpacity> */}
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}>
              No tienes cuenta? Registrate aqui
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};



export default Ingresar;