import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#bdbdbd',
        backgroundColor: '#eeeeee',
        margin: 10,
        flexDirection: 'row',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    image: {
        width: 125,
        minHeight: 100,
        resizeMode: 'contain',
    },
    body_container: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-around',
    },
    category: {
        fontSize: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontWeight: 'bold',
    },
})