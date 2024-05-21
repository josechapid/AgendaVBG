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
        width: '100%'
        
    },
    image: {
    width: '100%',
    height: '100%',
  },
    middleSection: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4a261", 
        paddingVertical: 0,
        width: '100%'
    },
    textSection: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 20,
        marginBottom:15,
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
    
  }

})