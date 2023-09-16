import React,{useState} from 'react';
import {View, Text, Touchable, TouchableOpacity,ImageBackground} from 'react-native';
import {useForm,Controller} from 'react-hook-form' 
import { useDispatch } from 'react-redux';
import { loginUser } from '../Redux/Slices/UserSlice';
import { TextInput,Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Login = (props) => {
  const nav = useNavigation();
  const {control ,handleSubmit ,formState} = useForm({mode:"onSubmit"});
  const [input,setInput]=useState('');
  const dispatch=useDispatch();
  const [success,setSuccess] =useState(null);
  function onSubmit(values){
    try {
      dispatch(loginUser(values));
      
      console.log("in login page",values);
          setSuccess('User Logined successfully!');
          nav.navigate('home')
      }catch (error) {
      console.log(error);
          setSuccess('Error Loging user. Please try again.');
      }

  }
    console.log(formState.errors);
    function changeText(text){
        setInput(text);
    }
  return (
    <View>
      <ImageBackground source={require("../assets/leaf(2).jpg")} style={{ height: '100%' }} />
      <View style={{alignItems: 'center', width: 360 ,position:"absolute"}}>
        <Text
          style={{
            color: 'white',
            fontSize: 55,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          {/* تسجيل الدخول */}
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 800,
            width: 400,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: '#81ba00', fontWeight: 'bold'}}>
            مرحبا بعودتك  
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
              سجل الدخول لحسابك
          </Text>
          <Controller
                rules={{
                    required:true,
                }}
                control={control}
                name='email'
                render={({field})=>
                <TextInput 
                    onChangeText={field.onChange} 
                    mode="outlined"
                    label="الايميل"
                    activeOutlineColor="#81ba00"
                    outlineColor="#81ba00"
                    placeholder="الايميل"
                    style={{fontSize:18,marginHorizontal:30,marginVertical:5,width: 300,direction:'rtl'}}
                />
                }/>
                <Controller
                rules={{
                    required:true,
                }}
                control={control}
                name='password'
                render={({field})=>
                <TextInput 
                    onChangeText={field.onChange} 
                    mode="outlined"
                    label="كلمة السر"
                    placeholder="كلمة السر"
                    activeOutlineColor="#81ba00"
                    outlineColor="#81ba00"
                    secureTextEntry
                    right={<TextInput.Icon icon="eye"/>}
                    style={{fontSize:18,marginHorizontal:30,marginVertical:5,width:300}}
                /> 
                }/>

          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200}}>
            <Text style={{color: '#81ba00', fontWeight: 'bold', fontSize: 16}}>
                هل نسيت كلمة السر؟ 
            </Text>
            <Button
                  onPress={handleSubmit(onSubmit)}
                  buttonColor="white"
    
                
                  textColor="#81ba00" 
                  style={{marginHorizontal:20,marginTop:25,width:200,borderColor:'#81ba00',borderWidth:1} }
                  Press={() => alert("Logged In")}
              >
                  تسجيل الدخول
            </Button>
            <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" ,marginTop:20}}>
              <TouchableOpacity onPress={() => props.navigation.navigate("signup")}>
                <Text style={{ color: '#81ba00', fontWeight: 'bold', fontSize: 16}}>انشئ حساب</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 16, fontWeight:"bold" }}> ليس لديك حساب؟ </Text>
            </View>
          </View>



        </View>
      </View>
    </View>
 
    
  );
};

export default Login;
