import React from 'react';
import { View, Text, Image } from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch'; 
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import styles from './Details.style';

const Details = ({route}) => {
    const {id} = route.params;
    const {loading, productList, error} = useFetch('https://fakestoreapi.com/products'+ '/'+ id );

    if(loading){
        return <Loading />
    }

    if(error){
        return <Error />
    }
    
    return (
        <View style={styles.container} >
            <Image style={styles.image} source={{ uri: productList[id-1].image}}/>
            <View style={styles.body_container} >
                <Text style={styles.title} > {productList[id-1].title} </Text>
                <Text style={styles.description} > {productList[id-1].description} </Text>
                <Text style={styles.price} > {productList[id-1].price} $ </Text>
            </View>
            
        </View>    
    );
}

export default Details;