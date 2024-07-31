import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        
    },
    section: {
        margin: 15,
    },
    topSection: {
        flex: 0.2,
        backgroundColor: "#f4a261",
        width: '100%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
},
    text: {
        fontSize:15,
        textAlign:"center",
        marginTop:20,
        margin:15
    },
    img:{
    width:200,
    height:200,
    marginBottom: 10,
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 25,

    },
    textSection: {
        backgroundColor: "#F5CAC3",
        width: "100%",
        padding: 8,
        borderRadius: 5,
        alignSelf: 'center',
        margin: 15,
        
    },
    textCenter:{
        textAlign:'center',
        fontWeight: "bold",
        fontSize:15

    },
    description:{
        width: '100%', 
        height: 150, 
        backgroundColor: '#d9d9d9', 
        paddingHorizontal: 10, 
        paddingVertical: 10, 
        borderRadius: 8, 
        textAlignVertical: 'top', 
        fontSize: 16, 
        
    },
     button:{
        backgroundColor: "#F5CAC3",
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop:50,
        marginBottom:15
    },

    buttonText: {
    
    fontSize: 16,
    fontWeight: 'bold',
  },
  notesList: {
    marginTop: 20,
  },
  note: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  noteDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
    
})