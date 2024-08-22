import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
       
    },
     scrollContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
     section: {
        margin: 15,
    },
    topSection: {
        flex: 0.5,
        backgroundColor: "#f4a261",
        width: '100%',
        margin:0
         
         
    },

    title: {
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
    // textCenter:{
    //     textAlign:'center',
    //     fontWeight: "bold",
    //     fontSize:15
    // },
});