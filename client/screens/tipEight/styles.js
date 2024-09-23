import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    alignItems: "center",
    margin: 15,
    flexGrow: 1
  },
  imageContainer: {
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 20,
  },
  imageTipEight: {
    /* resizeMode: "contain", */
    height: 200,
    width: 200,
    borderRadius: 20,
  },
  textSection: {
    backgroundColor: "#F5CAC3",
    width: "100%",
    flex: 1,
    borderRadius: 5,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  text: {
    fontSize: 25,
  },
  textDescription: {
    marginTop: 20,
  },
  description: {
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#F5CAC3",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    width: 100,
    height: 50,
    alignSelf: "center",
    marginBottom: 30,
  },
  enviarButtonText: {
    fontSize: 16,
  },
  inputContainer: {
    marginVertical: 20,
    backgroundColor: "#D9D9D9",
    marginTop: 25,
    width: '100%'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    height: 300,
    textAlignVertical: "top", // Para asegurar que el texto empieza desde la parte superior
  },
});
