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
     descriptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 10,
    },
    description:{
        flex: 1,
        height: 150,
        backgroundColor: '#d9d9d9',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 8,
        fontSize: 16,
        marginRight: 10
        
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