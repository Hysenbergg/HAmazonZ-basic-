import { StyleSheet, Dimensions } from "react-native";

const pictureSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {flex: 1},
    body_container: {padding: 10},
    image: {
        width: pictureSize.width ,
        height: pictureSize.height / 3,
        resizeMode: 'contain',
        backgroundColor: 'white'
    },
    title: {fontWeight: 'bold', fontSize: 25,},
    description: {fontStyle: 'italic', fontSize: 18, marginTop: 10,},
    price: {fontWeight: 'bold', fontSize: 25, textAlign: 'center',
        borderColor: '#64b5f6',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
        padding: 8
    },
})