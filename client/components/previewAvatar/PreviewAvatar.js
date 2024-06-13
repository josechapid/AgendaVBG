import React from 'react';
import { View, StyleSheet } from 'react-native';



const PreviewAvatar = ({ avatarConfig }) => {
  const { skinColor, hairColor, hairLength, eyeColor,  mouthType, hasGlasses } = avatarConfig;

  const getSkinColorStyle = (color) => {
    switch (color) {
      case 'light': return styles.lightSkin;
      case 'dark': return styles.darkSkin;
      default: return styles.lightSkin;
    }
  };

  const getHairColorStyle = (color) => {
    switch (color) {
      case 'brown': return styles.brownHair;
      case 'blonde': return styles.blondeHair;
      default: return styles.brownHair;
    }
  };

 const getHairLengthStyle = (length) => {
    switch (length) {
      case 'short': return styles.shortHair;
      case 'long': return styles.longHair;
      default: return styles.shortHair;
    }
  }

  const getEyeColorStyle = (color) => {
    switch (color) {
      case 'blue': return styles.blueEyes;
      case 'green': return styles.greenEyes;
      case 'black': return styles.blackEyes;
      default: return styles.blueEyes;
    }
  };

    const getMouthStyle = (type) => {
    switch (type) {
      case 'smile': return styles.smileMouth;
      case 'serious': return styles.seriousMouth;
      default: return styles.smileMouth;
    }
  }

  return (
    <View style={[styles.avatar, getSkinColorStyle(skinColor)]}>
      <View style={[styles.hair, getHairColorStyle(hairColor), getHairLengthStyle(hairLength)]} />
      <View style={styles.eyesContainer}>
        <View style={[styles.eye, getEyeColorStyle(eyeColor)]} />
        <View style={[styles.eye, getEyeColorStyle(eyeColor)]} />
        
      </View>
       <View style={[styles.mouth, getMouthStyle(mouthType)]} />
      {hasGlasses && (
        <View style={styles.glasses}>
          <View style={styles.glass} />
          <View style={styles.glass} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  lightSkin: {
    backgroundColor: '#FFDAB9',
  },
  darkSkin: {
    backgroundColor: '#8B4513',
  },
  hair: {
    width: '50%',
    position: 'absolute',
    top: 0,
  },
  shortHair: {
    height: '25%',
  },
  longHair: {
    height: '50%',
  },
  brownHair: {
    backgroundColor: '#8B4513',
  },
  blondeHair: {
    backgroundColor: '#FFD700',
  },
  eyesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '50%',
    width: '50%',
  },
  eye: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  blueEyes: {
    backgroundColor: '#0000FF',
  },
  greenEyes: {
    backgroundColor: '#00FF00',
  },
  blackEyes: {
    backgroundColor: 'black'
  },
  mouth: {
    width: '40%',
    height: 5,
    borderRadius: 2.5,
    position: 'absolute',
    bottom: '20%',
  },
  smileMouth: {
    backgroundColor: '#FF69B4',
  },
  seriousMouth: {
    backgroundColor: '#000',
  },
  glasses: {
    position: 'absolute',
    top: '45%',
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  glass: {
    width: 20,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
});

export default PreviewAvatar;