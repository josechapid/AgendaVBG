import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:0.8,
       
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
        backgroundColor: "#f4a261",
        width: "100%",
        padding: 8,
        borderRadius: 5,
        alignSelf: 'center',
        margin: 15,
    },
    responseContainer: {
        backgroundColor: '#d9d9d9', 
        padding: 15,
        margin: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    responseText: {
        fontSize: 16,
        color: 'black',  
    },
    keyText: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black',  
    },
});