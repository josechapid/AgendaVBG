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
       section: {
        margin: 15,
    },
    input: {
    height: 40,
    borderColor: '#f4a261',
    backgroundColor:'#f4a261',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop:15
  },
  button:{
        backgroundColor: "#F5CAC3",
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop:50
    },
passwordVisibilityButton: {
    position: "absolute",
    right: 10,
    top: 10
  },
});