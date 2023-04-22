import { View, Text, TextInput, StyleSheet } from "react-native";
import color from "../../utils/color";

const Input = (props) => {
    const {numLines, multiline, label, data, setData} = props
    return (
        <>
            <View><Text style={{color: color.white}}>{label}</Text></View>
            <View style={styles.inputItem} ><TextInput onChange={(e) => {setData(e.target.value)}}  borderRadius={5} numberOfLines={numLines} textAlignVertical="top" multiline={multiline} paddingLeft={10} placeholder={data} style={[{backgroundColor: "#505050"}, {color: color.white, paddingTop: 5}]}/></View>
        </>
    );
}
export default Input;

const styles = StyleSheet.create({
    inputItem: {
        paddingTop: 5,
        borderRadius: 10,
        color: color.white,
        textAlign: 'left',
        marginVertical: 10,
    },
})