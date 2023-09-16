import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { styles } from './ProductsStyle'
import { addToCart } from '../Redux/Slices/ProductSlice'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import{addToFavorite} from '../Redux/Slices/ProductSlice'

const Card = ({data}) => {
    const api="http://10.171.241.48:3500/"

    const dispatch = useDispatch()
    const nav=useNavigation();
    function  showdetails(data){
        nav.navigate("details",data)

    }
  return (
    <View style={styles.card}>
        <View style={{alignItems:'flex-end'}}>
            <View style={{flexDirection:'column',
            alignItems:'center',
            justifyContent:'space-between',
            // backgroundColor:'#fff7f7ff',


            }}>
            <Icon name='favorite' size={18} color={'red'} onPress={()=>{
        
               dispatch(addToFavorite({...data}))

            }}/>
              <Icon name='remove-red-eye' size={18} color={'#81ba00'} onPress={()=>{
               showdetails(data);

            }}/>
            </View>   
            <View style={{height:170, alignItems:'center'}}>
                <Image style={{flex:1, resizeMode:'contain', width:140 }} source={{uri:`${api}${data.imageUrl}`}}/>
                <Text style={{fontWeight:'bold', fontSize:17, marginTop:10}}>{data.name}</Text>
                <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:5 , marginLeft:10, gap:55}}>     
                    <View style={{height:25, width:25, backgroundColor:'#f8eeeeff', borderRadius:5, justifyContent:'center', alignItems:'center',borderColor:'#81ba00',borderWidth:1}}>
                        <Text style={{fontSize:22, color:'white', fontWeight:'bold'}}>
                            <Icon name='shopping-cart' size={20}color={'#81ba00'} backgroundColor={"#f2f8e4"} onPress={()=>{
                         dispatch(addToCart({...data, qt: 1, total:data.price}))}}/>
                        </Text>
                    </View>
                    <Text style={{fontSize:19, fontWeight:'bold'}}>{data.price}ج.م</Text>
                </View>
            </View>
        </View>
      </View>
  )
}

export default Card