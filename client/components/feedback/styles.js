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
        marginRight: 15,
        marginLeft: 15
    },
    topSection: {
        flex: 0.5,
        backgroundColor: "#f4a261",
        width: '100%',
        margin:0,
        justifyContent: "center",
        height: 0.5
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
        margin: 15,
        padding: 5,
        borderRadius: 10,
        marginBottom: 10,
    },
    responseContainerArray:{

    },
    responseContainerObject:{
        margin: 0,
        padding: 0
    },
    responseText: {
        fontSize: 16,
        color: 'black',  
    },
    keyText: {
        fontWeight: 'bold',
        marginBottom: 2,
        color: 'blue', 
        margin: 0,
        padding: 0 
    },
});