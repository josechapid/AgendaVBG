import React, { useState } from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import PreviewAvatar from "../previewAvatar/PreviewAvatar"


const AvatarCreator = ({ route, navigation }) => {
   const { avatarConfig: initialConfig, onAvatarChange } = route.params;
  const [avatarConfig, setAvatarConfig] = useState(initialConfig);

  const updateAvatar = (key, value) => {
    setAvatarConfig((prevConfig) => ({
      ...prevConfig,
      [key]: value,
    }));
  };

   const handleSave = () => {
    onAvatarChange(avatarConfig);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <PreviewAvatar avatarConfig={avatarConfig} />
      
      <View style={styles.controls}>
        <Text>Color de piel</Text>
        <Button title="Claro" onPress={() => updateAvatar('skinColor', 'light')} />
        <Button title="Oscuro" onPress={() => updateAvatar('skinColor', 'dark')} />
        
        <Text>Color de cabello</Text>
        <Button title="Castaño" onPress={() => updateAvatar('hairColor', 'brown')} />
        <Button title="Rubio" onPress={() => updateAvatar('hairColor', 'blonde')} />

        <Text>Largo de cabello</Text>
        <Button title="Corto" onPress={() => updateAvatar('hairLength', 'short')} />
        <Button title="Largo" onPress={() => updateAvatar('hairLength', 'long')} />
        
        <Text>Color de ojos</Text>
        <Button title="Azul" onPress={() => updateAvatar('eyeColor', 'blue')} />
        <Button title="Verde" onPress={() => updateAvatar('eyeColor', 'green')} />
        <Button title="black" onPress={() => updateAvatar('eyeColor', 'black')} />

         <Text>Tipo de boca</Text>
        <Button title="Sonriente" onPress={() => updateAvatar('mouthType', 'smile')} />
        <Button title="Serio" onPress={() => updateAvatar('mouthType', 'serious')} />

        <Text>Usa lentes</Text>
        <Button title="Sí" onPress={() => updateAvatar('hasGlasses', true)} />
        <Button title="No" onPress={() => updateAvatar('hasGlasses', false)} />
      </View>
        <Button title="Guardar" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  controls: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default AvatarCreator;