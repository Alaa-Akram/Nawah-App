import { View, Text, TextInput, SafeAreaView, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './ProductsStyle'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { getAllroducts } from '../Redux/Slices/ProductSlice'

const Products = () => {
    const dispatch = useDispatch()
    const { products, cart } = useSelector(state => state.ProductSlice)
    const [arr, setArr] = useState([])
    const [flag, setFlag] = useState(1)
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")

    //*******************************renderItem*********************//
    function renderItem({ item }) {

        return <Card data={item} />
    }

    //*******************************useEffect*********************//
    useEffect(() => {
        dispatch(getAllroducts())
    }, []);


    //********************************navigateToCart*****************************/
    const nav = useNavigation();
    function navigateToCart() {
        nav.navigate('cart')
    }

    //*******************************filter************************//
    function filter(category) {
        if (category === 'all') {
            setArr(products);
        }
        else if (search !== '') {
            change(search);
        }
        else {
            let cat = products.filter((item) =>
                item.category === category
            );
            setArr(cat);
        }
    }

    //*******************************search*************************//
    function change(text) {
        setSearch(text);
        let filteredProducts = products.filter((product) => {

            return product.name.includes(text) && (flag == 1 || product.category === getCategoryName(flag)); // Filter based on selected category
        });
        if (filteredProducts.some(product => product.name.includes(text))) {
            setArr(filteredProducts);
            console.log(arr);
        } else {
            setArr([]);

            console.log(arr);
        }

    }

    function getCategoryName(flag) {
        if (flag == 2) {
            return 'palm';
        }
        else if (flag == 3) {
            return 'dates';
        }
        else if (flag == 4) {
            return 'fertilizer';
        }
        else {

            return '';
        }
    }

    //***********************************Sort*************************//
    function Sort(sortOption) {
        setSort(sortOption);
        if (arr.length > 0) { // only sort if there are products in arr
            let sortedProducts = [];
            if (sortOption === "lowToHigh") {
                sortedProducts = [...arr].sort((a, b) => a.price - b.price);
            } else {
                sortedProducts = [...arr].sort((a, b) => b.price - a.price);
            }
            setArr(sortedProducts);
        }
    }

    return (
        <SafeAreaView style={styles.area}>
            <View style={styles.header}>
                <View>
                    {cart.length > 0 && (
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>{cart.length}</Text>
                        </View>
                    )}
                    <Icon name='shopping-cart' size={28} onPress={()=>{
                        navigateToCart();

                    }} />
                </View>
                <View>
                    {/* <Text style={{fontSize:25, fontWeight:'bold'}}>Welcome to</Text> */}
                    <Text style={{ fontSize: 38, fontWeight: 'bold', color: '#81ba00' }}>نــــــواة</Text>
                </View>
            </View>
            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                <TouchableOpacity style={styles.sortBtn}>
                    <Icons name='sort-reverse-variant' size={30} color={'white'} onPress={() => Sort("lowToHigh")} />
                </TouchableOpacity>
                <View style={styles.searchcontainer}>
                    <TextInput placeholder='ابحث عن المنتج...' style={styles.input} onChangeText={change} value={search} />
                    <Icon name='search' size={25} color={'#6f726f'} />
                </View>
            </View>
            <View style={styles.categoryContainer}>
                <Text style={[styles.categoryText, flag == 4 && styles.categoryTextSelected]} onPress={() => { filter('fertilizer'), setFlag(4) }}>الأسمدة</Text>
                <Text style={[styles.categoryText, flag == 3 && styles.categoryTextSelected]} onPress={() => { filter('dates'), setFlag(3) }}>البلح</Text>
                <Text style={[styles.categoryText, flag == 2 && styles.categoryTextSelected]} onPress={() => { filter('palm'), setFlag(2) }}>الشـتـلات</Text>
                <Text style={[styles.categoryText, flag == 1 && styles.categoryTextSelected]} onPress={() => { filter('all'), setFlag(1) }}>الكل</Text>
            </View>
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                }}
                numColumns={2}
                data={
                    search !== ''
                        ? arr.filter((product) => product.name.includes(search))
                        : arr.length > 0
                            ? arr
                            : products.filter((product) => flag == 1 || product.category === getCategoryName(flag))
                }
                keyExtractor={(item, index) => index}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

export default Products