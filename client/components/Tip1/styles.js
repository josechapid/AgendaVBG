import { StyleSheet } from "react-native";

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: "#f0f0f0", // Color de fondo del ScrollView
  },
  container: {
    flex: 1,
    alignContent: "center",
  },
  tipImageContainer: {
    alignItems: "center",
    width: "100%",
    height: 200,
  },
  tipImage: {
    resizeMode: "contain",
    height: 200,
    width: 300,
  },
  tipTextContainer: {
    alignItems: "center",
    marginTop: 0,
  },
  tipText: {
    fontSize: 25,
    textAlign: "center",
    margin: 20,
    fontFamily: "sans-serif",
  },
  tipButtonContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  tipButton: {
    backgroundColor: "#F5CAC3",
    paddingHorizontal: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 50,
  },
  buttonText: {
    fontSize: 20,
  },
});