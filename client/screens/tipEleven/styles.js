import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        
    },
    section: {
        margin: 15,
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
    textSection: {
        backgroundColor: "#F5CAC3",
        width: "100%",
        padding: 8,
        borderRadius: 5,
        alignSelf: 'center',
        margin: 15,
    },
    textCenter:{
        textAlign:'center',
        fontWeight: "bold",
        fontSize:15
    },
    text: {
        fontSize:15,
        textAlign:"center",
        marginTop:20,
        margin:15
    },
    img:{
    width:300,
    height:200,
    marginBottom: 10,
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 25,

    },
   button:{
        backgroundColor: "#F5CAC3",
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop:50,
        marginBottom:15
    },

});