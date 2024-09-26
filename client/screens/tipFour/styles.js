import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
        
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
img:{
    width:200,
    height:200,
    marginBottom: 10,
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 25,

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
        marginTop:10,
    },
    icon:{
        flex:0.5,
        justifyContent:"center",
        alignSelf: 'center',
        marginTop:15
    },
    description:{
        width: '100%', 
        height: 150, 
        backgroundColor: '#d9d9d9', 
        paddingHorizontal: 10, 
        paddingVertical: 10, 
        borderRadius: 8, 
        verticalAlign: 'top', 
        fontSize: 16, 
        marginTop:20,
        marginBottom:10
        
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