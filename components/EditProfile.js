import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import * as ImagePicker from "expo-image-picker";
import { getUserOne } from '../Redux/Slices/UserSlice'
import { useForm, Controller } from 'react-hook-form'
import { TextInput, Button } from 'react-native-paper';
import { updateUser } from '../Redux/Slices/UserSlice';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon4 from 'react-native-vector-icons/FontAwesome5'



const EditProfile = () => {
    // const [name, setName] = useState('');
    // const [bio, setBio] = useState('');
    const [isProfileEditModalVisible, setIsProfileEditModalVisible] = useState(false);
    const [img, setimg] = useState("");
    const { control, handleSubmit, formState } = useForm({ mode: "onSubmit" });

    const dispatch = useDispatch();
    const [profile, setprofile] = useState([]);
    const [input, setInput] = useState('');
    const [success, setSuccess] = useState(null);

    function onSubmitHandler(values) {


        console.log("onsubmit values", values);
        try {
            console.log("negm")
            setSuccess('Userupdated successfuly successfully!');
            let value = {
                fname: values?.fname,
                lname: values?.lname,
                email: values?.email,
                password: values?.password,
                phone: values?.phone,
                address: values?.address,
                img: img


            }


            dispatch(updateUser(value));

        } catch (error) {
            console.log(error);
            setSuccess('Error registering user. Please try again.');
        }
        onClose();

    }
    console.log("errors", formState.errors);

    useEffect(() => {
        dispatch(getUserOne()).then((result) => {
            setprofile(result.payload);
            console.log(result.payload);
        })
    }, []);


    function onClose() {
        setIsProfileEditModalVisible(false)
    }
    function changeText(text) {
        setInput(text);
    }
    // image picker function

    const pickimage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            allowsMultipleSelection: false,
        });

        console.log(result);
        setimg(result.assets[0]);

        if (!result.canceled) {
            setimg(result.assets[0].uri);
            console.log("result", result.assets[0].uri);
        }
    };




    return (


        <View style={{}}>



            <View style={{ alignItems: "center" }}>
                {/* <Button title="Edit Profile" onPress={()=>{setIsProfileEditModalVisible(true)}} /> */}
                <Button
                onPress={()=>{setIsProfileEditModalVisible(true)}}
       
                textColor="black" 
           
                Press={() => {
                 
            
                }}
            >
            <Icon4 name="edit" size={20} style={{position:'absolute', left:300, top:10}}/>
            </Button>
            </View>
            <Modal visible={isProfileEditModalVisible} animationType="slide">
                <View style={{ flexDirection: "row", justifyContent: 'flex-end', marginBottom: 10 }}>
                    <TouchableOpacity style={styles.closeButton} onPress={() => {
                        onClose();
                    }
                    }>

                        <Icon name="close" size={20} color={"#81ba00"} />
                    </TouchableOpacity>


                </View>
                <ScrollView>


                    <View style={styles.container}>
                        <Controller
                            control={control}
                            name="img"
                            defaultValue=""
                            value={img}

                            render={({ field }) => (
                                <Button onPress={() => { pickimage() }} style={{ width: 40, height: 40, backgroundColor: "#81ba00", color: 'white' }}>
                                    <Icon name="camera" size={20} color={"white"} style={{ flex: 1, flexDirection: 'row', alignContent: 'center'}} />
                                </Button>
                            )}
                        />

                        <Controller
                            control={control}
                            name='address'
                            render={({ field }) =>
                                <TextInput
                                    onChangeText={field.onChange}
                                    mode="outlined"
                                    label="العنوان"
                                    activeOutlineColor="#81ba00"
                                    outlineColor="#81ba00"
                                    placeholder={profile?.address}
                                    style={{ fontSize: 18, marginHorizontal: 30, marginVertical: 10, width: 300, direction: 'rtl' , borderRadius:70 }}
                                />
                            } />
                        <Controller

                            control={control}
                            name="email"
                            render={({ field }) =>
                                <TextInput
                                    onChangeText={field.onChange}
                                    mode="outlined"
                                    label="الايميل"
                                    activeOutlineColor="#81ba00"
                                    outlineColor="#81ba00"
                                    // placeholder={profile?.email}
                                    style={{ fontSize: 18, marginHorizontal: 30, marginVertical: 10, width: 300, direction: 'rtl' }}
                                />
                            } />

                        <Controller

                            control={control}
                            name='fname'
                            render={({ field }) =>
                                <TextInput
                                    onChangeText={field.onChange}
                                    mode="outlined"
                                    label="اسم المستخدم"
                                    placeholder={profile?.fname}
                                    activeOutlineColor="#81ba00"
                                    outlineColor="#81ba00"

                                    // right={<TextInput.Icon icon="eye"/>}
                                    style={{ fontSize: 18, marginHorizontal: 30, marginVertical: 10, width: 300 }}
                                />
                            } />
                        <Controller

                            control={control}
                            name='lname'
                            render={({ field }) =>
                                <TextInput
                                    onChangeText={field.onChange}
                                    mode="outlined"
                                    label="اللقب"
                                    activeOutlineColor="#81ba00"
                                    outlineColor="#81ba00"
                                    // placeholder={profile?.lname}
                                    style={{ fontSize: 18, marginHorizontal: 30, marginVertical: 10, width: 300, direction: 'rtl' }}
                                />
                            } />
                        <Controller

                            control={control}
                            name='phone'
                            render={({ field }) =>
                                <TextInput
                                    onChangeText={field.onChange}
                                    mode="outlined"
                                    label="الهاتف"
                                    activeOutlineColor="#81ba00"
                                    outlineColor="#81ba00"
                                    // keyboardType='Number'
                                    // placeholder={profile?.phone.toString()}
                                    style={{ fontSize: 18, marginHorizontal: 30, marginVertical: 10, width: 300, direction: 'rtl' }}
                                />
                            } />
                        <Controller

                            control={control}
                            name='password'
                            render={({ field }) =>
                                <TextInput
                                    onChangeText={field.onChange}
                                    mode="outlined"
                                    label="كلمة السر"
                                    activeOutlineColor="#81ba00"
                                    outlineColor="#81ba00"
                                    secureTextEntry
                                    placeholder={profile?.password}
                                    style={{ fontSize: 18, marginHorizontal: 30, marginVertical: 10, width: 300, direction: 'rtl' }}
                                />
                            } />


                        <Button
                            onPress={handleSubmit(onSubmitHandler)}
                            buttonColor="#81ba00"
                            textColor="white"
                            style={{ marginHorizontal: 80, marginTop: 40, width: 200, marginBottom: 40 }}
                            Press={() => {
                                alert('data edited');

                            }}
                        >
                            عدل البيانات
                        </Button>

                    </View>
                </ScrollView>

            </Modal>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 20,
    },
    closeButtonText: {
        fontSize: 18,
        color: '#81ba00',
    },
    avatarContainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#EFEFEF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    avatarPlaceholder: {
        fontSize: 16,
        color: '#A9A9A9',
    },
    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontSize: 18,
        marginBottom: 20,
    },
    submitButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
});

export default EditProfile;
