import * as React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles"

export default function CitasScreen() {
  return (
    <ScrollView>
      <View style={styles.navBar}>
        <Text style={styles.title}>Citas</Text>
      </View>
    </ScrollView>
  )
};