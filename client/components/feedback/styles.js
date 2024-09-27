import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:0.8,
        
    },
     scrollContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    section: {
        marginRight: 15,
        marginLeft: 15
    },
    topSection: {
        flex: 0.5,
        backgroundColor: "#f4a261",
        width: '100%',
        margin:0,
        justifyContent: "center",
        height: 0.5
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
},
textSection: {
        backgroundColor: "#f4a261",
        width: "100%",
        padding: 8,
        borderRadius: 5,
        alignSelf: 'center',
        margin: 15,
    },
    responseContainer: {
    
        backgroundColor: '#d9d9d9', 
        margin: 12,
        padding: 5,
        borderRadius: 10,
        marginBottom: 10,
    },
    responseContainerArray:{

    },
    responseContainerObject:{
        margin: 0,
        padding: 0
    },
    responseText: {
        fontSize: 16,
        color: 'black', 
        marginRight: 10, // otras dos cambiadas
        marginBottom: 5, 
    },
    keyText: {
        fontWeight: 'bold',
        marginBottom: 5, //cambiado y estba en 2
        color: 'black', 
        margin: 0,
        padding: 0 
    },
     responseTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',  // Para separar Día y Ejercicio
    marginBottom: 5,
  },
    responseContainerHorizontal: {
    flexDirection: 'row',   
    flexWrap: 'wrap', 
    justifyContent: 'space-between',  // Distribuir uniformemente
    marginBottom: 10,  
    
    }, 
    responseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',  // Distribuir uniformemente los elementos
    marginTop: 5,                    // Margen superior para separación de los títulos
  },
   responseItem: {
    // flexDirection: 'row',
    // margin: 5,
    flex:1, 
    alignItems: 'center',   // Alinea los elementos en el centro
    // marginRight: 20,
    // marginBottom: 5, 
          
  },
    // horizontalResponseContainer: {
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     margin: 0,
    //     padding: 0,
    // },
});