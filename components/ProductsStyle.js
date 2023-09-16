import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('screen').width/2-30

export const styles = StyleSheet.create({
area:{
        flex:1,
        paddingHorizontal:20,
        backgroundColor: 'white',
        direction:'rtl'
    },
header:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between'
   },
   searchcontainer:{
    height:50,
    backgroundColor: '#f2f8e4',
    borderRadius:10,
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
},
input:{
    fontSize:18,
    fontWeight:'bold',
    color:'#81ba00',
    flex:1
},
sortBtn:{
    marginRight:20,
    height:50,
    width:50,
    backgroundColor:'#81ba00',
    justifyContent:'center',
    alignItems:'center',

    borderRadius:10,
},
categoryContainer:{
    flexDirection:'row',
    marginTop:30,
    marginBottom:20,
    justifyContent:'space-around'
},
categoryText:{
    fontSize:16,
    fontWeight:'bold',
    color:'grey'
},
categoryTextSelected:{
    color:'#81ba00',
    paddingBottom:5,
    borderBottomWidth:2,
    borderBottomColor:'#81ba00'
},
card:{
    height:225,
    backgroundColor: '#f2f8e4',
    width,
    borderRadius:20,
    marginHorizontal:2,
    padding:15,
    marginBottom:20,
},
badge:{
    borderRadius: 50,
    backgroundColor:'red',
    width:20,
    // paddingHorizontal:2
},
badgeText:{
    color:'white',
    paddingHorizontal:6
}
    },
  );