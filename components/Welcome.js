import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, StyleSheet, Text,ImageBackground ,onPress,TouchableOpacity} from 'react-native';

const Welcome = (props) => {
  const nav = useNavigation();
  return (
  <View>
      <ImageBackground source={require("../assets/leaf(2).jpg")} style={{ height: '100%' }} /> 
      <View style={{ marginHorizontal: 40, marginVertical: 100 ,position:"absolute"}}>
      <Text style={{ color: 'white', fontSize: 55 }}> </Text>
      <Text style={{ color: 'white', fontSize: 55, marginBottom: 40 }}> </Text>
      <TouchableOpacity
      onPress={()=>nav.navigate("login")}
      style={{
        backgroundColor: "transparent",
        borderColor:'#81ba00',
        borderWidth:1,
        borderRadius: 100,
        alignItems: 'center',
        width: 300,
        paddingVertical: 5,
        marginTop: 180,
      }}>
      <Text style={{color: "#81ba00", fontSize: 25, fontWeight: 'bold'}} >
        تسجيل الدخول
      </Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={()=>nav.navigate("signup")}
      style={{
        backgroundColor: "transparent",
        borderColor:'#81ba00',
        borderWidth:1,
        borderRadius: 100,
        alignItems: 'center',
        width: 300,
        paddingVertical: 5,
        marginVertical: 10
      }}>
      <Text style={{color: "#81ba00", fontSize: 25, fontWeight: 'bold'}} Press={() => props.navigation.navigate("signup")}>
      أنشئ حساب
      </Text>
    </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({})

export default Welcome;
