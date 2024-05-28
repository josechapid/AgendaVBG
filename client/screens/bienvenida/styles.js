import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        
    },
    topSection: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#f4a261",
        paddingLeft: 20,
    },
    imageSec: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7ede2",
        width: '100%',
        aspectRatio: 1
        
    },
    image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1
  },
    middleSection: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4a261", 
        width: '100%',
        flexDirection:"row",
        paddingHorizontal:20,

    },
    textSection: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 20,
        marginBottom:15,
        marginTop:20
    },
    button: {
        backgroundColor: "#f4a261",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignSelf: "flex-end",
        marginBottom: 20,
    },
    buttonText: {
        color: "black",
        fontSize: 18,

    },
    title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
    text: {
        fontSize: 18,
    
},
    rj:{
        fontSize: 30, 
        color:"#f7ede2",
        fontFamily:"BirthstoneBounce-Regular"
    },
    logo:{
        width:50,
        height:50,
        marginRight:30,
        
},
// logoSection:{
//     backgroundColor:"white",
    
    
// }


})