import { StyleSheet } from "react-native";

export default StyleSheet.create({
  scrollViewContainer: {
    alignItems: "center",
    margin: 15,
  },
  imageContainer: {
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 10,
  },
  imageRutes: {
    resizeMode: "contain",
    height: 180,
    width: 250,
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
});