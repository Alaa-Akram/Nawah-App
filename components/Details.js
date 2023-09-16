import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Slices/ProductSlice'

const Details = (props) => {
  const api="http://10.171.241.48:3500/"

  const item=props.route.params
  console.log("items in details",item);
  console.log("deimg",item.imageUrl);
  let realvalue = item.rates[0];
  let currentvalue = Math.round(realvalue);
  const nav=useNavigation();
  const dispatch = useDispatch()


  const stars = Array(5).fill(0);
  const colors = {
    orange: "#ffa500",
    grey: "#808080"
  }
  return (
    <SafeAreaView style={{flex:1,backgroundColor:Colors.white}}>

    <View style={styles.header}>
      <Icon name="arrow-back" size={28} onPress={()=>{
        nav.navigate("products");
      }}/>
      {/* <Icon name="shopping-cart" size={28} onPress={()=>{
        nav.navigate("cart");

      }}/> */}
      </View>
      
      <View style={styles.imagecontainer}>
    
      <Image source={{uri:`${api}${item.imageUrl}`}} style={{ width: 250, height: 200, borderRadius: 20}}/>
      </View>
  
  
    <View style={styles.detailscontainer}>
   
   <View style={{
    marginLeft:20,marginTop:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'
    }}>
      <Text style={{fontSize:20,fontWeight:'bold',textAlign:'right'}}>{item?.name}</Text>
      <View style={styles.pricetab}>
        <Text style={{marginLeft:15,color:Colors.white,fontWeight:'bold',fontSize:16,textAlign:'center'}}>{item?.price}</Text>
      </View>
     
    
    </View>
  
    <View style={{paddingHorizontal:20,marginTop:10,justifyContent:'flex-end'}}>
      <Text style={{fontSize:20,fontWeight:'bold',flexDirection:'row'}}>وصف المنتج</Text>
      <Text style={{color:'grey',fontSize:16,lineHeight:22,marginTop:20,textAlign:'right'}}>
      {item?.description}
      </Text>
      
      {/* main down view */}
      <View style={{marginTop:20,flexDirection:"row",justifyContent:"space-between"}}>
  
        <View style={{flexDirection:"row",alignItems:"center"}}>
        {
              stars.map((item, index) => {
                return (
                  <Icon key={index}


                   name="star" size={28}  color={(currentvalue) > index ? colors.orange : colors.grey}


                  />

                )


              })
            }
      
          
        </View>
        <TouchableOpacity onPress={
          ()=>{
            dispatch(addToCart({...item, qt: 1, total:item?.price}))
            nav.navigate('cart')

          }
        }>
        <View style={styles.buybtn}>
          <Text style={{color:"#81ba00",fontSize:18,fontWeight:"bold"}}>شراء</Text>
        </View>
        </TouchableOpacity>
      </View>
  
    </View>
  
    </View>
  
  
  </SafeAreaView>
  );
}

export default Details
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81ba00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // headerchecked
  header:{
    paddingHorizontal:20,
    marginTop:20,
    flexDirection: 'row',
  
    justifyContent:'space-between',
    
  },
  imagecontainer:{
    flex:0.45,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
  },
  detailscontainer:{
    flex:0.55,
    backgroundColor:"#f2f8e4",
    marginHorizontal:7,
    marginBottom:7,
    borderRadius:20,
    paddingTop:30,
    marginTop:30,


  },
  line:{
    width:25,
    height:2,
    backgroundColor:Colors.dark,
    marginBottom:5,
    marginRight:3
  },
  pricetab:{
    backgroundColor:"#81ba00",
    width:80,
    height:40,
    borderTopLeftRadius:25,
    borderBottomLeftRadius:25,
    justifyContent:'center',

      
  },
  borderbtn:{
    borderColor:"grey",
    borderWidth:1,
    borderRadius:5,
    height:40,
    width:60,
    justifyContent:'center',
    alignItems:'center'

  },
  borderbtntxt:{
    fontSize:20,
    fontWeight:'bold'

  },
  buybtn:{
    width:150,
    height:50,
    // backgroundColor:Colors.light,
    justifyContent:'center',
        alignItems:'center',
        borderRadius:40,
        borderColor:'#81ba00',
        borderWidth:1
  }
});
