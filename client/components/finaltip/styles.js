import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        margin: 15
       
    },
    topSection: {
        flex: 0.2,
        backgroundColor: "#f4a261",
        width: '100%',
       
        
    },
    title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
     textAlign: 'center',
},
    img:{
       width:300,
        height:300,
        marginBottom: 15,
        borderRadius: 15,
        alignSelf: "center",
        marginTop: 20,

    },
    textTips:{
        fontSize: 14, 
        marginBottom: 15
    },
    textBox:{
        backgroundColor: "#d9d9d9", 
        padding: 10,
        borderRadius: 10,
    },
    // phrase:{
    //     marginBottom: 50
    // },
    button:{
        backgroundColor: "#F5CAC3",
        padding: 8,
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: 20,
        marginTop:50,

        
    },
    buttonText:{
        color:"black",
        
    },
})