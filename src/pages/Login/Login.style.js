import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#64b5f6',
    },
    logo_container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 40,
    },
    logo: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/2,
        resizeMode: 'contain',
        tintColor: 'white',
        alignSelf: 'center',
    },
    body_container: {
        flex: 1,
        paddingTop: 25,
    }
})