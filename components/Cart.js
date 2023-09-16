import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import CartCard from './CartCard '
import Cartempty from './Cartempty'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'

const Cart = () => {
  const nav = useNavigation();
  const { cart } = useSelector(state => state.ProductSlice)
  console.log(cart);


  // console.log(cart);
  function renderItem({ item }) {
    return <CartCard data={item} />
  }
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qt,
    0
  ).toFixed(2);

  if (cart === []) {
    return (





      <View style={{ flex: 1 }}>
        <Cartempty />

      </View>





    )




  } else {
    return (
      <View style={{marginTop:35 , height:700}}>
        <View >
          <Text
            style={{ fontSize: 26, fontWeight: "bold", marginRight: 50,  }}
          > عربة تسوق <Icon name='shopping-cart' size={24} /> </Text>
          
        </View>
        <View style={{ backgroundColor: "#e6f6c3", marginTop: 20, paddingTop: 55, borderTopLeftRadius: 85 , height:550}}>

          <ScrollView>


            <View style={{ flex: 1 }}>

              <FlatList
                data={cart}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
              />
              {/* <View style={{flexDirection:'row', justifyContent:'space-around'}}>
<Text style={{fontSize:25}}>Delivery</Text>
<Text style={{fontSize:25}}>$10.0000</Text>
</View> */}
              {/* <Text style={{color:'#8f8b8b', fontSize:17, textAlign:'center'}}>All Orders Of or more Quality for FREE delivery $1000 </Text> */}

              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, marginBottom: 10 }}>
                <Text style={{ fontSize: 25 }}>{totalPrice} ج.م</Text>
                <Text style={{ fontSize: 25 }}>السعر الكلــي :</Text>
              </View>
              <Button onPress={() => { nav.navigate("checkout"); }}
                buttonColor="transparent"
                textColor="black"
                style={{ marginHorizontal: 80, backgroundColor: "#e6f6c3", marginTop: 31.5, width: 200, marginBottom: 5, borderColor: '#adc178', borderWidth: 1 }}
                Press={() => { alert('Accoutn created'); }}>
                اذهب للدفع
              </Button>
            </View>




          </ScrollView>
        </View >
      </View>
      // <View style={{backgroundColor:"green" , borderTopLeftRadius:"20px" , borderTopLeftRadius:"20px"}}>


    )


  }

}

export default Cart