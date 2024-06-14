import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import SvgUri from 'react-native-svg'; // Importa el componente SvgUri para cargar SVG desde una URL
import axios from 'axios';

const Avatar = ({ navigation }) => {
  const [avatarUrl, setAvatarUrl] = useState('');
  const [username, setUsername] = useState('');

  const fetchAvatar = async () => {
    try {
      const response = await axios.get(`https://avatars.dicebear.com/api/avataaars/${username}.svg`);
      setAvatarUrl(response.request.responseURL);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Get Avatar" onPress={fetchAvatar} />
      {avatarUrl ? (
        <SvgUri
          width="100"
          height="100"
          uri={avatarUrl}
        />
      ) : null}
      <Button
        title="Volver al Perfil"
        onPress={() => navigation.navigate('MyProfile')}
      />
    </View>
  );
};

export default Avatar;