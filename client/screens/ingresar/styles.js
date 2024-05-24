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
  },
  sectionLogin:{
     flex: 0.6,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4a261", 
        width: '100%',
        flexDirection:"column",
        paddingHorizontal:20,
  },
  button:{
        backgroundColor: "#f7ede2",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignSelf:"flex-end",
        marginBottom: 20,
  },
  buttonText: {
        color: "black",
        fontSize: 15,

    },
  buttonSec:{
    alignItems:"center",
    marginTop:20
  },
  loginText:{
    textAlign:"center",
    marginTop:10,
    color:"blue"
  },

})