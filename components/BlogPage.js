import React from 'react';
import {View, Text,Image,StyleSheet,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
 

function BlogPage(props) {
    const data= props.route?.params;
    console.log("mydta",props.route?.params);

  return (
    <View style={{
        flex:1,
        backgroundColor:"#FFF",
        
    }}>
        

                
                        <ScrollView>

        

                            <View style={styles.slide}>
                                <Image
                                    source={ data?.image}
                                    style={{ marginBottom: 50, height: 300, width: 700, marginTop: 60, }} />
                            </View>

                            <View style={{ marginHorizontal: 20, alignItems: "center" }}>
                                <Text style={{ fontWeight: "bold", fontSize: 28, color: "#62636a" }}>
                                    {data?.title}</Text>

                            </View>
                            <View>


                                <Text style={{
                                    paddingHorizontal: 20, fontWeight: "bold", color: "#62636a", paddingTop: 3, fontSize: 20
                                }}>
                                    {data?.post}
                                </Text>
                                <Image
                                    source={data?.postimage}
                                    style={{ height: 250, width: 400, marginTop: 20, }} />
                                <Text style={{
                                    paddingHorizontal: 20, fontWeight: "bold", color: "#62636a", paddingTop: 3, fontSize: 20
                                }}>
                                    {data?.post2}
                                </Text>
                            </View>
                        </ScrollView>
                    
        
                   
    </View>
  )
}
const styles = StyleSheet.create({
    carddetail: {
        backgroundColor:"#FFF",
        height:50,
        width:50,
        borderRadius:5,
        elevation:5,
        alignItems:"center",
        justifyContent:"center",
        marginTop:50
    
    },
    button:{
        width:"50%",
        backgroundColor:"#00a46c",
        height:70,
        marginTop:20,
        borderTopRightRadius:25,
        alignItems:"center",
        justifyContent:"center"
    },
    description:{
        width:"50%",
        alignItems:"center",
        justifyContent:"center",
        marginTop:20
    },
    wrapper:{},
    slide:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFF"
    }
  });
export default BlogPage


