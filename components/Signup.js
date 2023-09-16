import React ,{useState}from 'react';
import {View, Text, Touchable, TouchableOpacity,ImageBackground,ScrollView} from 'react-native';
import {useForm,Controller} from 'react-hook-form' 
import { useDispatch } from 'react-redux';
import { registerUser } from '../Redux/Slices/UserSlice';
import { TextInput,Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from "expo-image-picker";



const Signup = props => {
  const nav = useNavigation();
  const {control ,handleSubmit ,formState} = useForm({mode:"onSubmit"});
  const [input,setInput]=useState('');
  const dispatch=useDispatch();
  const [success,setSuccess] =useState(null);
  const[img,setimg] = useState("")

  function onSubmit(values){
      console.log("values in sighnup",values);
      console.log("imginsub",img);
    
      let value={
        "email": values?.email,

      "password": values?.password,
      "address": values?.address,
    "fname": values?.fname,
      "img":img
      }
      
      try {
        console.log("values after imgadd",value);
          dispatch(registerUser(value));
          setSuccess('User registered successfully!');
          nav.navigate('login')
      }catch (error) {
      console.log(error);
          setSuccess('Error registering user. Please try again.');
      }

  }
  console.log(formState.errors);
  function changeText(text){
      setInput(text);
  }
  /*mage picker function*/
  const pickimage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        allowsMultipleSelection: false,
    });

    console.log(result);
   

    if (!result.canceled) {
        setimg(result.assets[0].uri);
        // console.log("result",result.assets[0].uri);
    }
};
  return (

    <View>
    
        <ImageBackground source={require("../assets/leaf(2).jpg")} style={{ height: '100%' }} />
        <View style={{alignItems: 'center', width: 380, position:"absolute"}}>
        <Text
          style={{
            color: 'white',
            fontSize: 55,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 380,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
            
            <Controller
                rules={{
                    required:true,
                }}
                control={control}
                name='address'
                render={({field})=>
                <TextInput 
                    onChangeText={field.onChange} 
                    mode="outlined"
                    label="العنوان"
                    activeOutlineColor="#81ba00"
                    outlineColor="#81ba00"
                    placeholder="العنوان"
                    style={{fontSize:18,marginHorizontal:30,marginVertical:10,width:300,direction:'rtl'}}
                />
            }/>
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
                    style={{fontSize:18,marginHorizontal:30,marginVertical:10,width:300,direction:'rtl'}}
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
                    style={{fontSize:18,marginHorizontal:30,marginVertical:10,width:300}}
                /> 
            }/>
            <Controller
                rules={{
                    required:true,
                }}
                control={control}
                name='fname'
                render={({field})=>
                <TextInput 
                    onChangeText={field.onChange} 
                    mode="outlined"
                    label="اسم المستخدم"
                    placeholder="اسم المستخدم"
                    activeOutlineColor="#81ba00"
                    outlineColor="#81ba00"
                    secureTextEntry
                    // right={<TextInput.Icon icon="eye"/>}
                    style={{fontSize:18,marginHorizontal:30,marginVertical:10,width:300}}
                /> 
            }/>

           
            <Controller
          control={control}
          name="img"
          
          value={img}
         
          render={({ field }) => (
            <Button  style={{color:'white'}} onPress={()=>{pickimage()}}><Text style={{color:'#81ba00'}}>التقط صوره</Text></Button>
          )}
        />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16,
              
              
            }}>
            <Text style={{color: '#81ba00', fontWeight: 'bold', fontSize: 16}}>
              البنود و الشروط
            </Text>  
            <Text style={{color: 'black', fontSize: 16}}>
            من خلال تسجيل الدخول ، فإنك توافق على{' '}
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{color: '#81ba00', fontWeight: 'bold', fontSize: 16}}>
            سياسة الخصوصية
            </Text>  
            <Text style={{color: 'grey', fontSize: 16}}>
              و{" "}
            </Text>
          </View>
          <Button
                onPress={handleSubmit(onSubmit)}
                buttonColor="white"
                textColor="#81ba00" 
                style={{marginHorizontal:80,marginTop:10,width:100,borderColor:'#81ba00',borderWidth:1} }
                Press={() => {
                  alert('Accoutn created');
                  // handleSubmit((values) => onSubmit({ ...values, img }))
                }}
            >
                انشى حساب
            </Button>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop:20,
            }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('login')}>
              <Text
                style={{color:'#006A42', fontWeight: 'bold', fontSize: 16}}>
                تسجيل الدخول
              </Text>
            </TouchableOpacity>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              بالفعل لديك حساب؟{' '}
            </Text>
          </View>
        
        </View>
      </View>
     
    </View>

      
  
  );
};

export default Signup;
