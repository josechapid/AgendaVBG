import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    alignItems: "center",
    margin: 15,
    flexGrow: 1,
    padding: 10,
    paddingBottom: 50,
  },
  imageContainer: {
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 20,
  },
  imageTipThree: {
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
    marginBottom: 20,
  },
  text: {
    fontSize: 25,
  },
  textDescription: {
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    textAlign: "center",
  },
  subTitleContainer: {
    marginTop: 20,
    backgroundColor: "#F4A261",
    width: "100%",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    paddingLeft: 10,
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
    marginBottom: 15,
  },
  enviarButtonText: {
    fontSize: 16,
  },
  inputContainer: {
    marginVertical: 20,
    backgroundColor: "#D9D9D9",
    marginTop: 25,
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