import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Vector İcon olayımız giriş ekranındaki inputların içindeki küçük logolar için kull. kütüphane.
import styles from './Input.style';

const Input = ({placeholder, onChangedText, value, iconName, isSecure}) => {
    return (
        <View style={styles.container} >
            <Icon name={iconName} size={25} color="#2286c3" />
            <TextInput 
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangedText}
                value={value}
                secureTextEntry= {isSecure} // sifreyi gizlemek için kullandık.
            />
        </View>
    )
}

export default Input;