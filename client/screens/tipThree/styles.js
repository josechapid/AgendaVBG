import { StyleSheet } from "react-native";

export default StyleSheet.create({
  scrollViewContainer: {
    alignItems: "center",
    margin: 20,
    flexGrow: 1, 
    padding: 10
  },
  imageContainer: {
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 20,
  },
  imageTipUno: {
    resizeMode: "contain",
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
  enviarButton: {
    backgroundColor: "#F5CAC3",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 5,
    width: 100,
    height: 50,
    alignSelf: "center",
    marginBottom: 30,
  },
  enviarButtonText: {
    fontSize: 16,
  },
});
