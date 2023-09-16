import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, Image, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import TAB from './TAB';
import Splash from './components/Splash';
import Login from './components/Login';
import Signup from'./components/Signup';
import Details from './components/Details';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Products from './components/Products';
import AddRate from './components/AddRate';
import Profile from './components/Profile';
import Blog from './components/Blog';
import BlogPage from './components/BlogPage';
import Welcome from './components/Welcome';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';


const Stack = createNativeStackNavigator();
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs()


export default function App() {



  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#72039a' } }}>
          <Stack.Screen options={{ headerShown: false }} name='splash' component={Splash} />

          
            <Stack.Screen options={{ headerShown: false }} name='home' component={TAB} />
        
           <Stack.Screen options={{ headerShown: false }} name='welcome' component={Welcome} />
            
         

          <Stack.Screen options={{ headerShown: false }} name='signup' component={Signup} />
          <Stack.Screen options={{ headerShown: false }} name='login' component={Login} />
          <Stack.Screen options={{ headerShown: false }} name='details' component={Details} />
          <Stack.Screen options={{ headerShown: false }} name='checkout' component={Checkout} />
          <Stack.Screen options={{ headerShown: false }} name='cart' component={Cart} />
          <Stack.Screen options={{ headerShown: false }} name='products' component={Products} />
          <Stack.Screen options={{ headerShown: false }} name='addrate' component={AddRate} />
          <Stack.Screen options={{ headerShown: false }} name='profile' component={Profile} />
          <Stack.Screen options={{ headerShown: false }} name='blogpage' component={BlogPage} />
        </Stack.Navigator>
        <StatusBar style='light' />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
