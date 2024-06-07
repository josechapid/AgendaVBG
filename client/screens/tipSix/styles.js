import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
        
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
    marginTop: 25,
    },
     textSection:{
        backgroundColor: "#f4a261",
        padding: 8,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 15,

    },
    text:{
        fontSize:15
    },
     description:{
        width: '100%', 
        height: 150, 
        backgroundColor: '#d9d9d9', 
        paddingHorizontal: 10, 
        paddingVertical: 10, 
        borderRadius: 8, 
        textAlignVertical: 'top', 
        fontSize: 16, 
        marginTop:20
    },
     button:{
        backgroundColor: "#F5CAC3",
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop:50
    },
})