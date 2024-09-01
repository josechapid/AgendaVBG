import { StyleSheet } from "react-native";

export default StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    margin: 15,
  },
  title: {
    fontSize: 25,
  },
  titleInitial: {
    fontSize: 50,
    color: "#F4A261",
    fontFamily: "BirthstoneBounce-Regular",
  },
  input: {
    backgroundColor: "#F4A261",
    margin: 10,
    padding: 5,
    borderRadius: 10,
    height: 40,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    backgroundColor: "#F5CAC3",
    height: 50,
    alignSelf: "center",
    width: 150,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    justifyContent: "center",
  },
  errorText:{
    marginLeft:15,
    marginRight: 15
  }
});