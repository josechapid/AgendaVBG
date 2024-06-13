import React, { useState, useEffect } from "react";
import {  Text, View, Image, Button } from 'react-native';
import PreviewAvatar from "../../components/previewAvatar/PreviewAvatar";
import styles from "./styles";

const MyProfile = ({ navigation }) => {
    const [avatarConfig, setAvatarConfig] = useState({
    skinColor: 'light',
    hairColor: 'brown',
    hairLength: 'short',
    eyeColor: 'blue',
    mouthType: 'smile',  
    hasGlasses: false,
  });

  const handleAvatarChange = (newConfig) => {
    setAvatarConfig(newConfig);
  };

    return(
        <View style={styles.container}>
            <Text>Esta es la vista de mi perfil</Text>
            <PreviewAvatar avatarConfig={avatarConfig} />
            <Button
                title="Cambiar Avatar"
                onPress={() => navigation.navigate('AvatarCreator', { avatarConfig, onAvatarChange: handleAvatarChange })}
            />
        </View>
    )
}

export default MyProfile;