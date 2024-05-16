import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    topSection: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4a261",
    },
    imageSec: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7ede2",
    },
     image: {
    width: '100%',
    height: '100%'
  },
    textSection: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#f4a261",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignSelf: "center",
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

})