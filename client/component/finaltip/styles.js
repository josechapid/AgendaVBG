import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    topSection: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4a261",
        paddingLeft: 20,
        width: '100%',
    },
    title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
},
    img:{
        width:200,
        height:200,
        marginBottom: 20
    },
    textTips:{
        fontSize: 15, 
        marginBottom: 10
    },
    textBox:{
        backgroundColor: "#d9d9d9", 
        padding: 10,
        borderRadius: 5,
    },
    phrase:{
        marginBottom: 20
    },
    button:{
        backgroundColor: "#F5CAC3",
        padding: 10,
        borderRadius: 5
    },
    buttonText:{
        color:"black",
        
    },
})