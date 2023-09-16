import React from 'react'
import {View, Text, Image, StyleSheet,TextInput,ScrollView,TouchableOpacity,ImageBackground,Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';



let screenWidth = Dimensions.get("window").width;

 const Home = (props,{navigation}) => {
    const data=props?.data;
    console.log("inhome",props?.data);
    const nav=useNavigation();

    const img=require('../assets/new.jpeg' ) ;

     
    
    return(
           
         <ScrollView>
        <View style={styles.container} > 
        <ImageBackground source={img}>
        <View style={styles.header}>
            </View>
                 </ImageBackground>
         
   
             
              
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:450}}>
                    <LinearGradient
                        colors={["rgba(0,164,109,0.09)", "transparent"]}
                        style={styles.cardsection}/>
                    <TouchableOpacity 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={styles.card}>
                        <Image
                            source={require('../assets/imgthree.jpg')}/>
                        <View style={styles.info}>
                            <Text style={{fontWeight:"bold" }}>تمر سكوتي</Text>
                            <Text style={{
                                fontWeight:"bold", color:"#81ba00",paddingLeft:35 }}> ٤٠ج.م</Text>
                        </View>
                        <Text style={styles.st}>أسوان </Text>
                    </TouchableOpacity>

                    <View 
                     
                        style={styles.card}
                    >
                        <Image
                            source={require('../assets/imgone.jpg')}
                        />
                        <View style={styles.info}>
                            <Text style={{ fontWeight:"bold"}}>تمر زغلول</Text>
                            <Text style={{ fontWeight:"bold", color:"#81ba00",paddingLeft:45
                            }}>٥٠ ج.م</Text>
                        </View>
                        <Text style={styles.st}> أسوان </Text>
                    </View>

                    <View 
                  
                        style={styles.card}
                    >
                        <Image
                            source={require('../assets/imgtwo.png')}
                        />
                        <View style={styles.info}>
                            <Text style={{fontWeight:"bold"}}>تمر برتمودي</Text>
                            <Text style={{
                                fontWeight:"bold",color:"#81ba00",paddingLeft:35 }}>٣٠ ج.م</Text>
                        </View>
                        <Text style={styles.st}> أسوان</Text>
                    </View>

                </ScrollView>            

               <View style={{ flexDirection:"row",paddingHorizontal:20,width:"100%", alignItems:"center",
                   marginTop:-10, }}>
                   <View style={{width:"50%"}}>
                      
                   </View>
                  
               </View>

                 {data&&data.map((myblog, index)=>(
                 <View key={index}>
                 <ImageBackground
          source={myblog.image}
          borderRadius={12}
          style={{
            margin: 10,
            alignSelf: "center",
            flexDirection: "column",
            width: screenWidth - 20,
            height: 300,
            borderRadius: 12,
            elevation: 2,
            shadowColor: "#777",
            shadowOpacity: 0.16,
            shadowRadius: 2,
            shadowOffset: {
              height: 1,
              width: 0
            }
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              borderRadius: 12,
              flex: 1,
            }}
          >
            <Text style={{ flex: 1, color: "#fff", fontSize: 30, margin: 20 }}>
            
              {myblog.title}
            </Text>
            <View
              style={{
                flex: 4,
                marginLeft:20,
                backgroundColor: "transparent",
                alignItems: "flex-start"
              }}
            >
             
            
            </View>
            <TouchableOpacity 
            onPress={()=>{
                nav.navigate("blogpage",myblog)

            }}
       
            
              style={[
                {
                  justifyContent: "center",
                  zIndex: 3,
                  alignItems: "center",
                  alignSelf: "flex-start",
                  width: 150,
                  height: 40,
                  margin: 20,
                  shadowRadius: 5,
                  borderRadius: 40,
                  backgroundColor: "#81ba00"
                }
              ]}
            >
              <View style={{ flexDirection: "row" }}>
              {/* <TouchableOpacity onPress={()=>navigation.navigate("BlogPage")}>  */}
                <Text style={{ color: "#ffffff", fontSize: 13, fontWeight: "bold" }}  >
                  {"اذهب للقراءة"}
                </Text>
                {/* </TouchableOpacity> */}
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
                 </View>
                ) )}
        </View>
                </ScrollView>
     )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#FFF",
    flex:1,
    paddingTop:30
  },
  header:{
    // backgroundColor:"#00a46c",
    height:"10%",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    paddingHorizontal:20
  },
  headerContent:{
    flexDirection:"row",
 alignItems:"center",
  marginTop:15,
 width:"100%",
 
  },
  serch:{
    left:0,
right:0,
height:90,
marginTop:-15
  },
  serchbox:{
    backgroundColor:"#FFF",
    paddingVertical:8,
    paddingHorizontal:20,
    marginHorizontal:20,
    borderRadius:15,
     marginTop:25,
     flexDirection:"row",
     alignItems:"center"
  },
  recommended:{
    flexDirection:"row",
    paddingHorizontal:20,
    width:"100%",
    alignItems:"center",
    marginTop:30
  },
  button:{
    backgroundColor:"#00a46c",
    paddingHorizontal:20,
    paddingVertical:5,
    borderRadius:15
  },
  cardsection:{
    position:"absolute",
    left:0,
    right:0,
    height:100,
    marginTop:220,
    top:0
  },
  card:{
    height:250,
    elevation:2,
    backgroundColor:"#FFF",
    marginLeft:20,
    marginTop:20,
    borderRadius:15,
    marginBottom:10,
    width:160
  },
  info:{
    flexDirection:"row",
    paddingTop:10,
    paddingHorizontal:10
  },
  st:{
    paddingHorizontal:10,
    fontWeight:"bold",
    color:"#81ba00",
    paddingTop:3
  }
});
export default Home;