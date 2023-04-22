import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet, SafeAreaView, Image, FlatList, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import color from "../../utils/color";
import Input from "../InputFields/Input";
import { update } from "../Redux/userSlice";

const Edit = (props) => {
    const {setEdit} = props;
    const avtUrls = [
        "https://a.thumbs.redditmedia.com/zDOFJTXd6fmlD58VDGypiV94Leflz11woxmgbGY6p_4.png",
        "https://styles.redditmedia.com/t5_2z6zi/styles/communityIcon_cfjidmbwebq41.png",
        "https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png",
        "https://styles.redditmedia.com/t5_2qi27/styles/communityIcon_c6mtvgj38ki31.jpg?format=pjpg&s=7c9a157a973792d315d54075d8ab7800ab49d2fe",
        "https://styles.redditmedia.com/t5_2qh0y/styles/communityIcon_h9cdwd9m75a51.png",
        "https://styles.redditmedia.com/t5_2qhdf/styles/communityIcon_sk8k2hisvyv51.png",
        "https://b.thumbs.redditmedia.com/8RJ1zsSxLbTrSrRAhziwMynfkWVcuFNMXPsLqtGct1o.png",
        "https://styles.redditmedia.com/t5_36qrt/styles/communityIcon_essg5v68ccu01.png?width=256&v=enabled&s=5018705b9fb17c3cc1c1510a5b955984849883f1",
    ];
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);
    const [about, setAbout] = useState(user.about);
    const [avtUrl, setAvt] = useState(user.avtUrl)
    const handleSave = () => {
        setEdit(false)
        const newInfoUser = {
            name: name,
            age: age,
            about: about,
            avtUrl: avtUrl,
        };
        dispatch(update(newInfoUser));
    }
    return ( 
        <SafeAreaView style={styles.editContainer}>
            <TouchableOpacity>
                <TouchableOpacity onPress={handleSave} style={styles.save}>
                    <Text style={styles.saveText}>SAVE</Text>
                </TouchableOpacity>
            </TouchableOpacity>
                <View style={{marginTop: 30}}>
                    <View><Text style={[{color: color.white}, {fontWeight: 700}, {fontSize: 20}, {alignSelf: "center"}]}>Edit Profile</Text></View>
                    <View style={styles.inputContainer}>
                        <Input  numLines = {1} multiline = {false} label="Display Name" data={user.name} setData={setName}/>
                        <Input  numLines = {1} multiline = {false} label="Age" data={user.age} setData={setAge}/>
                        <Input  numLines = {6} multiline = {true} label="Description" data={user.about} setData={setAbout}/>
                        <View><Text style={[{color: color.white}]}>Avatar</Text></View>
                        <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", marginBottom: 10}}>
                            {avtUrls.map((url) => {
                                return (
                                    <TouchableOpacity onPress={(e) => setAvt(url)}><Image key={url} source={{uri: url}} style={[styles.imageAvt]}></Image></TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center", marginTop: 10}}>
                            <View style={{flex: 1}}><Text style={[{color: color.white}]}>Theme</Text></View>
                            <TextInput style={{width: 100, height: 50, backgroundColor: "#505050", borderRadius: 20, flex: 2}} keyboardType="color"/>
                        </View>
                    </View>
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    editContainer: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: color.primary,
        height: 100,
        marginTop: 10,
        padding: 20,
    },
    save: {
        backgroundColor: color.primary,
        alignSelf: "flex-end",
        marginTop: 30,
    },
    saveText: {
        color: "#0ea5e9",
        fontWeight: 700,
        fontSize: 20,
    },
    inputContainer: {
        width: "90%",
        fontSize: 18,
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
    },
    inputItem: {
        paddingTop: 5,
        borderRadius: 10,
        color: color.white,
        textAlign: 'left',
        marginVertical: 10,
    },
    imageAvt: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginTop: 10,
    }
})

export default Edit;