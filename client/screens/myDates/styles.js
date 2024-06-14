import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        
    },
    topSection:{
        flex: 0.2,
        backgroundColor: "#f4a261",
        width: '100%',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    img:{
    width:300,
    height:200,
    marginBottom: 10,
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 25
    },
    inputContainer: {
    width: '90%',
    margin: 15,
  },
  input: {
    marginBottom: 20,
  },
   confirmButton: {
    marginTop: 20,
  },
  confirmationContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  confirmationText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  confirmationDetails: {
    fontSize: 16,
  },
});