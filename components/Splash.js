import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";


const Splash = (props) => {
    // useEffect(() => {
    // const getData = async () => {
    //   try {
    //     const value = await AsyncStorage.getItem('token');
    //     if (value === null || value === '') {
    //       setLogged(false);
    //     } else {
    //       setLogged(true);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

//     getData();
//   }, []);
    useEffect(() => {

        setTimeout(() => {

            props.navigation.navigate('welcome');

        }, 3000)

    }, [])
    // useEffect(() => {
    //     const checkConditionAndNavigate = async () => {
    //         try {
    //             const value = await AsyncStorage.getItem('token');
    //             if (value === null || value === '') {
    //                 props.navigation.navigate('welcome'); // Navigate to LoginScreen
    //             } else {
    //                 props.navigation.navigate('home'); // Navigate to HomeScreen
    //             }
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     checkConditionAndNavigate();
    // }, []);
    return (
        <View style={style.con}>
            <Image style={{ width: 400, height: 400 }} source={require('../assets/logooo.gif')} />
        </View>
    )
}
const style = StyleSheet.create({
    con: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Splash