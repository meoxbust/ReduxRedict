import { View } from "react-native";
import { StyleSheet, Text, Image } from "react-native";
import color from "../../utils/color";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
const Header = (props) => {
    const user = useSelector((state) => state.user);
    const {setEdit} = props;
    const handleEdit = () => setEdit(true);
    return (
        <View style={[styles.header, {backgroundColor: "#0ea5e9"}]}>
            <View style={styles.infoContainer}>
                <TouchableOpacity onPress={handleEdit}>
                    <View style={styles.infoEdit}>
                        <Text style={[styles.headerText, {fontWeight: 700}]}>Edit</Text>
                    </View>
                </TouchableOpacity>
                <Image source={{uri: user.avtUrl}} style={styles.infoAvt}></Image>
                <Text style={[styles.headerText, styles.infoUserName, {fontWeight: 700}]}>{user.name}</Text>
                <Text style={[styles.headerText, styles.infoAgeAbout, {fontSize: 18}]}>{user.age}</Text>
                <Text style={[styles.headerText, {fontSize: 18}]}>{user.about}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: '40%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: 15,
    },
    infoContainer: {
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        paddingLeft: 20,
    },
    infoEdit: {
        alignSelf: "flex-end",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: color.white,
        borderRadius: 16,
        padding: 10,
        marginTop: 20,
        marginRight: 15, 
    },
    infoAvt: {
        height: 130,
        width: 100,
        overflow: "hidden",
        resizeMode: 'contain',
    },
    infoUserName: {
        width: "50%",
        marginBottom: 5,
    },
    infoAgeAbout:{
        marginBottom: 5,
    },
    headerText: {
        color: color.white,
        textAlign: 'left',
        fontSize: 18,
    }
})

export default Header;