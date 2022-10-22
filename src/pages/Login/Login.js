import React from 'react';
import { SafeAreaView, Image, View, Alert } from 'react-native';
import { Formik } from 'formik';
// Formiğin avantajı inputlardaki girdilerin her değişikliğinde sayfayı tekrardan render etmemesi.
// İlk başta bir kere render eder sonra bunu yapmaz.
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';

import usePost from '../../hooks/usePost/usePost';

const Login = ({navigation}) => {

    const {data, loading, error, post} = usePost();

    function SystemLogin(values) {  // inputlardaki bilgileri alıp kullandığımız fonksiyon burasi.
        post('https://fakestoreapi.com/auth'+'/login', values);
    }

    if(error){
        Alert.alert("Dükkan", "Kullanıcı bulunamadı.");
    }

    if(data){
        if(data.status == 'Error'){
            Alert.alert("Dükkan", "Kullanıcı bulunamadı.");
        }
        else{
            navigation.navigate('ProductsPages');
        } 
    }

    return(
        <SafeAreaView style={styles.container} >
            <View style={styles.logo_container} >
                <Image style={styles.logo} source={require('../../assets/shopping_logo.png')} />
            </View>
            <Formik
                initialValues={{ username: '', password: ''}} // State kısmımız burası.
                onSubmit={ SystemLogin }  // Fonksiyon değişeceği zaman burası değişecek.
            >    
                {({ handleChange, handleSubmit, values }) => (<View style={styles.body_container} >
                    <Input 
                        placeholder="Kullanici adinizi giriniz.." 
                        onChangedText={handleChange('username')} 
                        value={values.username} 
                        iconName="account"
                    />
                    <Input 
                        placeholder="Sifrenizi giriniz.." 
                        onChangedText={handleChange('password')} 
                        value={values.password}
                        iconName="shield-key"
                        isSecure 
                    />
                    <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                </View>)}
            </Formik>
        </SafeAreaView>
    )
}

export default Login;