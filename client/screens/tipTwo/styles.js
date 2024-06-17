import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  scrollViewContainer: {
    alignItems: "center",
    margin: 15,
    flexGrow: 1,
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
    textAlign: "center",
    paddingLeft: 10,
  },
  form: {
    width: "100%",
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
  buttonGenerate: {
    alignItems: "center",
    height: 40,
    backgroundColor: "#F4A261",
    justifyContent: "center",
    width: 80,
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  textGenerate: {},
  recompensasContainer: {
    width: "100%",
    marginBottom: 20,
  },
  recompensaItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    width: "100%",
  },
  recompensaTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  enviarButton: {
    backgroundColor: "#F4A261",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    width: 70,
    alignSelf: "center",
    height: 40,
  },
  
});