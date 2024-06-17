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
  imageTipNine: {
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
  buttonAddPerson: {
    alignItems: "center",
    height: 40,
    backgroundColor: "#F4A261",
    justifyContent: "center",
    width: 200,
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  textGenerate: {},
  peopleContainer: {
    width: "100%",
    marginBottom: 20,
  },
  personItem: {
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
