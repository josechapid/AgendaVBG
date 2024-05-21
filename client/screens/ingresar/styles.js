import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    width: '100%', 
    height: 300, 
    resizeMode: 'cover', 
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
   descriptionContainer: {
    maxHeight: 200, 
    padding: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'justify'
  }
})