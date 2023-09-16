import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { dicrementProduct, incrementProduct, removeCart } from '../Redux/Slices/ProductSlice'

const CartCard = ({ data }) => {
  // const [count, setCount] = useState(0)
  // function set(){
  //   setCount(data.quantity)
  // }
  const api="http://10.171.241.48:3500/"
  const dispatch = useDispatch()
  console.log(data)
  return (
    <View style={{ flexDirection: 'row', backgroundColor: '#81ba00',borderTopLeftRadius:55, width: 350, width: 350, marginHorizontal: 15, padding: 15, marginVertical: 20, justifyContent:'space-between' }}>

        <TouchableOpacity>
          <Icon onPress={() => {
            dispatch(removeCart(data._id))
          }} name='delete' size={25} color={'#c22525'} style={{ marginTop: 42 }} />
        </TouchableOpacity> 

      <View style={{ alignItems: 'center', marginTop: 5, marginRight: 20, justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 19, fontWeight: 'bold' }}>{data.name}</Text>
        <Text style={{ fontSize: 17, }}>السعر : {data.price}</Text>
        <Text style={{ fontSize: 17, }}>المجموع : {data.total}</Text>
        <View style={{ alignItems: 'flex-start', width: 100, justifyContent: "space-around", flexDirection: 'row-reverse', backgroundColor:'transparent', color:'white', borderRadius:8 }}>
          <TouchableOpacity>
            <Icon onPress={() => {
              dispatch(incrementProduct(data._id))
            }} name='add' size={25} style={{color:"#e6f6c3"}}/>
          </TouchableOpacity>
          <Text >{data.qt}</Text>
          <TouchableOpacity>
            <Icon onPress={() => {
              dispatch(dicrementProduct(data._id))
            }} name='remove' size={25} style={{color:"#e6f6c3"}} />
          </TouchableOpacity>
        </View>
        {/* <View style={{flexDirection:'row', fontSize:20, marginTop:15}}>
            <Text><Icon name='add'/></Text>
            <Text style={{marginBottom:5}}>0</Text>
            <Text><Icon name='remove'/></Text>
        </View> */}
      </View>
      <View style={{ alignItems: 'flex-end', width: 100 }}>
        <Image style={{ width: 80, height: 80, backgroundColor: '#81ba00' }} source={{uri:`${api}${data.imageUrl}`}}/>
      </View>
    </View>
  )
}

export default CartCard 