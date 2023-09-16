import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import Home from './components/Home';
import Profile from './components/Profile';
import Products from './components/Products';
import Checkout from './components/Checkout';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import { AddButton } from './components/AddButton';
import Blog from './components/Blog';



function TAB() {
    const Tab = createBottomTabNavigator();
    return <Tab.Navigator screenOptions={{ tabBarInactiveTintColor: '#391717', tabBarActiveTintColor: '#81ba00', tabBarStyle: { backgroundColor: 'white' , borderTopLeftRadius:35 ,  borderTopRightRadius:35} }}>
        <Tab.Screen options={{headerShown: false,
            tabBarIcon: ({ focused, color }) => {
                if (focused) {
                    return <Icon name='home' color={color} size={26} />
                }
                else
                    return <Icon name='home' color={color} size={26} />
            }
        }}
            name='الصفحه الرئيسيه' component={Blog} />
         <Tab.Screen options={{headerShown: false, tabBarIcon: ({ color }) => <Icon name="man" color={color} size={24} /> }}
             name='الملف الشخصي' component={Profile} />
        <Tab.Screen options={{headerShown: false, tabBarIcon: ({ color }) => <Icon2 name="shopping-basket" color={color} size={24} /> }} name='المنتجات' component={Products}/>                                                                                                                                                                                                                                                                                                                                                                                                                 
             
     

    </Tab.Navigator>
}
export default TAB;
