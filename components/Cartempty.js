import { View, Text, Image } from 'react-native'
import React from 'react'

const Cartempty = () => {
    
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image source={require("../assets/emptycart.png")} style={{alignSelf:'center'}}></Image>
        <Text style={{fontsize:30,fontWeight:"bold"}}>cart empty!!!!</Text>
       
     
    </View>
  )
}

export default Cartempty