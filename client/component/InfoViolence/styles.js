import { StyleSheet } from "react-native";

export default StyleSheet.create({
  scrollViewContent: {
    padding: 10,
    margin: 0,
  },
  /* conteinerTitle  */
  containertitleUno: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5, // Espacio entre filas
  },
  imagetitle: {
    marginRight: 5, // Espacio entre la imagen y el texto
  },
  imagetitleUno: {
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
  textTitle: {
    flex: 1,
    justifyContent: "center",
    maxWidth: "70%",
    alignItems: "center",
    backgroundColor: "#d9d9d9",
    height: 100,
    width: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  textTitleUno: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    flexShrink: 1,
  },
  /* container descriptionGeneral */

  descriptionContainer: {
    textAlign: "center",
    height: 90,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  descriptionContainerUno: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 5,
  },
  descriptionContainerDos: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 15,
    height: 100,
    
  },

  /* subTitle  */
  subtitle: {
    backgroundColor: "#d9d9d9",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  subtitleUno: {
    textAlign: "center",
    fontSize: 24,
    height: 40,
    fontWeight: "bold",
  },
  /* typesContainer */
  typesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#d9d9d9",
    borderRadius: 200,
    marginTop: 10,
    padding: 0,
  },
  typesImage: {
    marginRight: 0,
  },
  imageTypesUno: {
    height: 170,
    width: 170,
    resizeMode: "contain",
  },
  typesInfo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  typesInfoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    height: 30,
    width: 200,
  },
  typesInfoDescriptionUno: {
    fontSize: 14,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#f5cac3",
    height: 65,
    width: 200,
    justifyContent: "flex-end",
    borderRadius: 20,
    marginBottom: 20,
  },
  typesInfoDescriptionDos: {
    fontSize: 14,
    textAlign: "center",
    backgroundColor: "#f5cac3",
    height: 110,
    width: 200,
    borderRadius: 20,
  },

  /* violentometro */
  violentometro: {
    height: 800,
    width: 370,
    
    
   
  },
  imageViolentometro: {
    height: 800,
    width: 370,
    resizeMode: "contain",
    
  },
});
