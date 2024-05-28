import * as React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

function InfoViolence() {
    
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* ------------------------------------------------------------container title 1 */}
        <View style={styles.containertitleUno}>
          <View style={styles.imagetitle}>
            <Image
              source={require("../../assets/vistajose/mujer_preguntas.png")}
              style={styles.imagetitleUno}
            />
          </View>
          <View style={styles.textTitle}>
            <Text style={styles.textTitleUno}>
              ¿Que es violencia de género?
            </Text>
          </View>
        </View>

        {/* ------------------------------------------------------------container description general */}

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionContainerUno}>
            Todo acto o amenaza de violencia basada en género que tenga como
            consecuencia perjuicio y/o sufrimiento en la salud física, sexual o
            psicológica, de la mujer y/o del hombre.
          </Text>
        </View>
        {/* ------------------------------------------------------------container bubTitle  */}
        <View style={styles.subtitle}>
          <Text style={styles.subtitleUno}>Tipos de violencia</Text>
        </View>

        {/* -------------violencia física-----------------------container typesContainer izq */}
        <View style={styles.typesContainer}>
          <View style={styles.typesImage}>
            <Image
              source={require("../../assets/vistajose/vilencia fisica.png")}
              style={styles.imageTypesUno}
            />
          </View>
          <View style={styles.typesInfo}>
            <Text style={styles.typesInfoTitle}>Violencia física</Text>
            <Text style={styles.typesInfoDescriptionUno}>
              Conducta dirigida a ocasionar daño en el cuerpo de la persona
            </Text>
          </View>
        </View>

        {/* -------------------violencia psicologica---------------------------container typesContainer izq */}
        <View style={styles.typesContainer}>
          <View style={styles.typesInfo}>
            <Text style={styles.typesInfoTitle}>Violencia Psicológica</Text>
            <Text style={styles.typesInfoDescriptionDos}>
              Acciones o palabras utilizadas para causar temor y miedo, para
              controlar la conducta, sentimientos y pensamientos, por medio de
              intimidación, amenaza y humillación.
            </Text>
          </View>
          <View style={styles.typesImage}>
            <Image
              source={require("../../assets/vistajose/violencia psicológica.png")}
              style={styles.imageTypesUno}
            />
          </View>
        </View>

        {/* -------------------violencia sexual---------------------------container typesContainer izq */}
        <View style={styles.typesContainer}>
          <View style={styles.typesImage}>
            <Image
              source={require("../../assets/vistajose/violencia sexual.png")}
              style={styles.imageTypesUno}
            />
          </View>
          <View style={styles.typesInfo}>
            <Text style={styles.typesInfoTitle}>Violencia sexual</Text>
            <Text style={styles.typesInfoDescriptionDos}>
              Todo acto o forma de contacto sexual sin consentimiento, esto
              incluye la imposición de tener relaciones sexuales mediante el uso
              de la fuerza e intimidación o amenaza. Incluye el intento de
              violación.
            </Text>
          </View>
        </View>

        {/* -------------------violencia económica---------------------------container typesContainer izq */}
        <View style={styles.typesContainer}>
          <View style={styles.typesInfo}>
            <Text style={styles.typesInfoTitle}>Violencia económica</Text>
            <Text style={styles.typesInfoDescriptionUno}>
              Control sobre el uso del dinero, negación de recursos,
              oportunidades y otros servicios sociales.
            </Text>
          </View>
          <View style={styles.typesImage}>
            <Image
              source={require("../../assets/vistajose/violencia economica.png")}
              style={styles.imageTypesUno}
            />
          </View>
        </View>

        {/* -----------------------------------------------------container bubTitle */}
        <View>
        <View style={styles.subtitle}>
          <Text style={styles.subtitleUno}>Violentómetro</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionContainerDos}>
            El violentómetro se presenta generalmente como una escala de colores
            que va desde el verde (comportamientos menos graves) hasta el rojo
            (comportamientos muy graves y peligrosos). Esta graduación permite
            visualizar la progresión de la violencia.
          </Text>
        </View>

        {/* -----------------------------------------------------container violentómetro */}
        <View style={styles.violentometro}>
          <Image
            source={require("../../assets/vistajose/q.webp")}
            style={styles.imageViolentometro}
          />
        </View>


        </View>
      </ScrollView>
    );
};



export default InfoViolence;

    



