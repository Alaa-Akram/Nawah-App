import  React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView ,Button, TouchableOpacity} from "react-native";
import { useState ,useEffect} from "react";
import { useDispatch } from "react-redux";
import EditProfile from"./EditProfile";
import { useSelector } from "react-redux";
import{getUserOne} from '../Redux/Slices/UserSlice'
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon3 from 'react-native-vector-icons/Entypo'
import { useNavigation } from "@react-navigation/native";
const Profile= () => {
    const api="http://10.171.241.48:3500/"
    const dispatch = useDispatch();
    const nav=useNavigation();
    let arr=[];
    const [profile, setprofile] = useState([]);
    useEffect(() => {
        dispatch(getUserOne()).then((result) => {
          setprofile(result.payload);
          console.log("user in profile",result.payload);
        })
      }, []);
      console.log("user in profile",profile);
      let orders=profile?.order
      console.log("printorder in profile",orders);
      console.log("hawah");
 //======sekect items from favourite===//
      const {Favorite}=useSelector((state)=>state.ProductSlice)
      console.log("fav",Favorite);
     
//========= ordercards functionality//
      if (orders) {
        orders.forEach((element)=>{
            element.items.forEach((product)=>{
                arr.push(product)
            })
        })
      }
      
      //=====add rate functionality=====//
      function Addrate(item){
        nav.navigate("addrate",item);

      }
      //====logout functionality====//
      const handleLogout = async () => {
        try {
          await AsyncStorage.removeItem('token');
          nav.navigate('login');
        } catch (error) {
          console.log(error);
        }
      };
   return (
    <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.titleBar}>
                    < Icon name="ios-arrow-back" size={24} color="#52575D" onPress={()=>{
                        nav.navigate("products");

                    }}/>
                      < Icon2 name="logout" size={24} color="#52575D" onPress={handleLogout}/>

                    {/* < Icon name="md-more" size={24} color="#52575D"/> */}
                </View>

                <View style={{backgroundColor:'#f8eeeeff', borderTopLeftRadius:55, borderTopRightRadius:55, marginTop:45, position:'relative'}}>
     
     <View style={{position:'absolute', left:300, top:10}}>
         <EditProfile/>
     </View>
                         {/* <View style={styles.profileImage}> */}
                             <Image source={{uri:`${api}${profile?.img}`}} style={styles.image2} resizeMode="center"></Image>
                         {/* </View> */}
                

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>{profile?.fname}</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>{profile?.address}</Text>
                </View>


                <View style={{ marginTop: 32 }}>
                <View style={{flexDirection:'row',alignItems:'baseline',marginRight:10,justifyContent:'flex-end'}}>
                <Icon3 name="shop" size={20} color={"#81ba00"} marginRight={5}/>
                <Text style={{fontSize:20,fontWeight:'bold',textAlign:'right',marginBottom:10,marginRight:8,color:'black'}}>طلباتك</Text>
               
                </View>
               

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                       
                        {arr.map((item)=>(
                             <TouchableOpacity onPress={()=>{
                             Addrate(item)

                            }}>
                            
                            <View style={styles.mediaImageContainer}>
                           
                            <Image source={{uri:`${api}${item.imageUrl}`}} style={styles.image} resizeMode="cover"></Image>
                            <Text style={{textAlign:"center" , color:"#81ba00"}} >{item.name}</Text>
                        </View>
                         </TouchableOpacity>


                        )

                        )}
                       
                    </ScrollView>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'green' ,marginTop:15}} />

                    <View style={{ marginTop: 15 }}>
                        <View style={{flexDirection:'row',alignItems:'baseline',marginRight:10,justifyContent:'flex-end'}}>
                        <Icon name='heart-sharp' size={20} color={"red"}/>
                    <Text style={{fontSize:20,fontWeight:'bold',textAlign:'right',marginBottom:10,marginRight:3,color:'black'}}>المفضله</Text>
                <View style={{ borderBottomWidth: 1, borderBottomColor: 'green' ,marginTop:15}} />

                    
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                       
                       {Favorite.map((item)=>(
                            <TouchableOpacity onPress={()=>{
                            Addrate(item)

                           }}>
                           
                           <View style={styles.mediaImageContainer}>
                          
                           <Image source={{uri:`${api}${item.imageUrl}`}} style={styles.image} resizeMode="cover"></Image>
                           <Text style={{textAlign:"center" , color:"#81ba00"}} >{item.name}</Text>
                          
                       </View>
                        </TouchableOpacity>


                       )

                       )}
                      
                   </ScrollView>
            
                   
                </View>
                
                
                {/* <EditProfile/> */}
           </View>
            </ScrollView>
        </SafeAreaView>
    
  );
};



export default Profile;
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#FFF"
  },
  text: {
      // fontFamily: "HelveticaNeue",
      color: "#52575D"
  },
  image: {
      flex: 1,
      height: undefined,
      width: undefined
  },
  titleBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 24,
      marginHorizontal: 16
  },
  subText: {
      fontSize: 12,
      color: "#AEB5BC",
      textTransform: "uppercase",
      fontWeight: "500"
  },
  profileImage: {
      width: 200,
      height: 200,
      borderRadius: 100,
      overflow: "hidden"
  },
  image2: {
    flex: 1,
    height:170,
    width: 170,
    borderRadius:170/2,
    alignSelf:'center',
    bottom:70
  //   top:100
},
  dm: {
      backgroundColor: "#41444B",
      position: "absolute",
      top: 20,
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center"
  },
  active: {
      backgroundColor: "#34FFB9",
      position: "absolute",
      bottom: 28,
      left: 10,
      padding: 4,
      height: 20,
      width: 20,
      borderRadius: 10
  },
  add: {
      backgroundColor: "#41444B",
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center"
  },
  infoContainer: {
      alignSelf: "center",
      alignItems: "center",
      marginTop: -70
  },
  statsContainer: {
      flexDirection: "row",
      alignSelf: "center",
      marginTop: 32
  },
  statsBox: {
      alignItems: "center",
      flex: 1
  },
  mediaImageContainer: {
      width: 100,
      height: 100,
      borderRadius: 12,
      overflow: "hidden",
      marginHorizontal: 10
  },
  mediaCount: {
      backgroundColor: "#41444B",
      position: "absolute",
      top: "50%",
      marginTop: -50,
      marginLeft: 30,
      width: 100,
      height: 100,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 12,
      shadowColor: "rgba(0, 0, 0, 0.38)",
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 20,
      shadowOpacity: 1
  },
  recent: {
      marginLeft: 78,
      marginTop: 32,
      marginBottom: 6,
      fontSize: 10
  },
  recentItem: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 16
  },
  activityIndicator: {
      backgroundColor: "#CABFAB",
      padding: 4,
      height: 12,
      width: 12,
      borderRadius: 6,
      marginTop: 3,
      marginRight: 20
  },card:{
    width: 160,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 10,
    backgroundColor: "green"
}
});
