import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useFormik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome'
import { addRate } from '../Redux/Slices/ProductSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/Ionicons'

const AddRate = (props) => {
  const nav=useNavigation();
      const item=props.route.params
      const dispatch=useDispatch();
      const [rating, setRating] = useState(0);
      const [Success, setSuccess] = useState(0);
      const formik = useFormik({
        initialValues: {
          // rates: '',
        },
        onSubmit: (values) => {
            let rates=values.rates
          // setRating(values.rates);
          // console.log(values.rates) 
          try {
            dispatch(addRate({rates, prodId: item._id }));
            setSuccess('rated successfully');
    
          } catch (error) {
            console.log(error);
            setSuccess('Error. Please try again.');
            console.log(rates);
          }
          

         
        },
      });
//       let formik = useFormik({
//         initialValues: {
    
//           rates: Number,
//         },
//         validationSchema: schema,
//         onSubmit: (rates) => {
//           console.log("first")
         
    
//         }
//       })
  return (
    // <View>
    //     <View style={{ flexDirection: "row",
    //   justifyContent: "space-between",
    //   marginTop: 24,
    //   marginHorizontal: 16}}>
    //                 < Icon2 name="ios-arrow-back" size={24} color="#52575D" onPress={()=>{
    //                     nav.navigate("profile");

    //                 }}/>
    //                 {/* < Icon name="md-more" size={24} color="#52575D"/> */}
    //             </View>

    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>اكتب تقييمك</Text>
     

      <View style={{ flexDirection: 'row',justifyContent:'space-between',marginBottom:10,marginTop:10}}>
        <TouchableOpacity onPress={() => formik.setFieldValue('rates', '1')}>
         <View style={{ borderRadius:30/2,height:30,alignSelf:'center',width:30,backgroundColor:"green",marginLeft:5}}><Text style={{fontSize:20,color:"white",fontWeight:"bold",textAlign:'center'}}>1</Text></View> 
        </TouchableOpacity>
        <TouchableOpacity onPress={() => formik.setFieldValue('rates', '2')}>
        <View style={{ borderRadius:30/2,height:30,alignSelf:'center',width:30,backgroundColor:"green",marginLeft:5}}><Text style={{fontSize:20,color:"white",fontWeight:"bold",textAlign:'center'}}>2</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => formik.setFieldValue('rates', '3')}>
        <View style={{ borderRadius:30/2,height:30,alignSelf:'center',width:30,backgroundColor:"green",marginLeft:5}}><Text style={{fontSize:20,color:"white",fontWeight:"bold",textAlign:'center'}}>3</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => formik.setFieldValue('rates', '4')}>
        <View style={{ borderRadius:30/2,height:30,alignSelf:'center',width:30,backgroundColor:"green",marginLeft:5}}><Text style={{fontSize:20,color:"white",fontWeight:"bold",textAlign:'center'}}>4</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => formik.setFieldValue('rates', '5')}>
        <View style={{ borderRadius:30/2,height:30,alignSelf:'center',width:30,backgroundColor:"green",marginLeft:5}}><Text style={{fontSize:20,color:"white",fontWeight:"bold",textAlign:'center'}}>5</Text></View>
        </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={formik.handleSubmit}>
       <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
       <Icon name="handshake-o" color={"green"} size={20}/>
        <Text style={{marginLeft:5}}>ارسل تقييمك</Text>
       
        </View> 
      </TouchableOpacity>


    </View>
    // </View>
  )
}

export default AddRate