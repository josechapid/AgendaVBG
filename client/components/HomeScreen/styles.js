import { StyleSheet } from "react-native";

export default StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  logoHeader: {},
  userGreetingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {
    fontSize: 18,
    color: "black",
  },
  logoutButton: {
    marginLeft: 10,
    marginRight:15
  },
  logo: {
    /* resizeMode: "contain", */
    height: 100,
    width: 100,
  },
  titleInitial: {
    fontSize: 50,
    color: "#F4A261",
    fontFamily: "BirthstoneBounce-Regular",
  },
  workshopContainerUno: {
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 200,
    alignItems: "center",
    backgroundColor: "#F5CAC3",
    height: 170,
    marginTop: 10,
    marginBottom: 20,
  },
  alignLeft: {
    marginLeft: 20,
    marginRight: 50,
  },
  alignRight: {
    marginRight: 20,
    marginLeft: 50,
  },
  workshopTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  workshopDescription: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
  },
  workshopButton: {
    backgroundColor: "#F7EDE2",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    width: 130,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
  greeting: {
    fontSize: 34,
    color: "#333", // Puedes cambiar el color según tu esquema de colores
    marginVertical: 10, // Espacio vertical alrededor del saludo
    margin: 0,
    paddingLeft: 15,
    fontFamily: "EduVICWANTBeginner-Medium",
  },
});