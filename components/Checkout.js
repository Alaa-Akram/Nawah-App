import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,Image, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import{addorder}from"../Redux/Slices/UserSlice";
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import{getUserOne} from '../Redux/Slices/UserSlice'
import { useState } from 'react';
import { useEffect } from 'react';


const Checkout = () => {
  const nav=useNavigation();
  const api="http://10.171.241.48:3500/"


const{Users}=useSelector(state=>state.UserSlice)
const{cart}=useSelector(state=>state.ProductSlice)
const totalPrice = cart.reduce(
  (total, item) => total + item.price * item.qt,
  0
).toFixed(2);

console.log("incheckout",Users);
  const dispatch = useDispatch();
  const [profile, setprofile] = useState([]);
    useEffect(() => {
        dispatch(getUserOne()).then((result) => {
          setprofile(result.payload);
          console.log(result.payload);
        })
      }, []);
  return (
    <ScrollView>
    <View style={styles.container}>
    {/* <Text style={{flexDirection:'row',justifyContent:'center'}}>تفاصيل الطلب</Text> */}
    <View style={styles.info}>
      <Text style={{textAlign:"center",fontSize:15,fontWeight:"bold",color:Colors.white}}>الاسم: {profile?.fname}</Text>
    </View>
    <View style={styles.info}>
      <Text style={{textAlign:"center",fontSize:15,fontWeight:"bold",color:Colors.white}}>العنوان: {profile?.address}</Text>
    </View>
  

    {cart&&cart.map((item)=>{
      return <View style={styles.ordercard}>
      <Image style={{width:50,height:50,alignSelf:'center'}}  source={{uri:`${api}${item?.imageUrl}`}}></Image>
      <Text style={{fontSize:20,fontWeight:"bold",color:Colors.dark,textAlign:'center'}}>اسم المنتج:{item.name}</Text>
      {/* <Text style={{fontSize:10,fontWeight:"bold",color:Colors.dark,textAlign:'center'}}>{item.title}:اسم المنتج</Text> */}
     
       </View>
    })}
    
    <View style={styles.totalprice}>
      <Text>السعر الكلي:{totalPrice}</Text>
    </View>
    <Button onPress={()=>{dispatch(addorder(...cart));
      nav.navigate("profile");}}
                buttonColor="#81ba00"
                textColor="white" 
                style={{marginHorizontal:80,marginTop:10,width:200,marginBottom:5} }
                Press={() => {alert('Accoutn created'); }}>
              تأكيد الاوردر
            </Button>



  </View>
  </ScrollView>
  )
}

export default Checkout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
  },
  ordercard:{
    width:300,
    hight:100,
    backgroundColor:"light",
    // border:1,
    borderColor: "#81ba00",
    borderWidth:1,
    elevation:1,
    padding:20,
    marginBottom:10,
  }
,
info:{
  width:300,
  height:30,
  marginBottom:5,
  // marginTop : 25 ,
  padiing:5,
  backgroundColor:'#81ba00',
  borderRadius:10,
  


  
}
,
btn:{
  borderRadius:20,
  backgroundColor:'#81ba00',
  

}
});