import { StyleSheet } from "react-native";

export default StyleSheet.create({
  scrollViewContainer: {
    alignItems: "center",
    margin: 15,
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    width: "100%",
    backgroundColor: "#D9D9D9",
  },
  fortalezasContainer: {
    marginTop: 0,
  },
  fortalezaItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    width: "100%",
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    height: 50,
  },
  debilidadesContainer: {
    marginTop: 0,
  },
  debilidadItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    width: "100%",
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    height: 50,
  },
  enviarButton: {
    backgroundColor: "#F5CAC3",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    width: 100,
    height:50
  },
  enviarButtonText: {
    fontSize: 16,
  },
});