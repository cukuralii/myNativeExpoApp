import { StyleSheet , Dimensions } from "react-native";

export default StyleSheet.create({
 
   container:{
    backgroundColor:'white',
    borderRadius:10,
    margin:10,
    padding: 20
   },
  
   innerContainer:{
      padding:2
   },

   cardImage:{
      height:Dimensions.get('window').height / 4, 
      margin:15,
      borderRadius:10
   },
   cardHeadText:{
    margin:0,
    padding:0,
    fontSize:20,
    fontWeight:"bold",
    textAlign:'center',
    marginBottom:10
   },
   cardDescriptionText:{
     fontSize:15,
     padding:10,
     textAlign:'center'
   },
   
   cardPersonText:{
      textAlign:"right",
      marginTop:5,
      marginBottom:2,
      fontSize:13,
      fontWeight:"bold",
      fontStyle:"italic"
      
   }
})