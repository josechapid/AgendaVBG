import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
        
    },
    topSection:{
        flex: 0.2,
        backgroundColor: "#f4a261",
        width: '100%',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    img:{
    width:300,
    height:200,
    marginBottom: 10,
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 25,
    },
    textSection:{
        backgroundColor: "#F5CAC3",
        padding: 8,
        borderRadius: 5,
        alignSelf: 'center'
    },
   
     descriptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 10,
    },
    description:{
        flex: 1,
        height: 40,
        backgroundColor: '#d9d9d9',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 8,
        fontSize: 16,
        marginRight: 10
        
    },
    textDescription:{
        backgroundColor: "#f4a261",
        padding: 8,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop:10,
        
    },
    button:{
        backgroundColor: "#F5CAC3",
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop:50,
    },
    //extras:
       listContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        padding: 10,
        borderRadius: 5,
        marginBottom: 5,
        height: 50,
    },
    listItemText: {
        fontSize: 16,
        color: '#333',
    },
    deleteButton: {
        backgroundColor: '#ccc',
        padding: 5,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

    textInput: {
        flex: 1,
        height: '100%',
        color: 'black',
    },
     input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    width: '30%',
    backgroundColor: "#D9D9D9",
  },
})