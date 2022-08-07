import React from 'react';
import { SafeAreaView, Button, FlatList} from 'react-native';
//import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch'; 
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Products = ({navigation}) => {

    const {loading, productList, error} = useFetch();  // useFetch fonksiyon componenti sayesinde veriakısını sağlıyoruz.

    const handleProductSelect = (id) => {
        navigation.navigate('DetailsPages', {id});
    }
    
    const renderProduct = ({item}) => <ProductCard product = {item} onSelect={() => handleProductSelect(item.id)} />

    if(loading){
        return <Loading />
    }

    if(error){
        return <Error />
    }

    return(
        <SafeAreaView>
            <FlatList 
                data={productList}
                renderItem= {renderProduct}
            />
            <Button title="Urunleri Listele" onPress={useFetch}/>
        </SafeAreaView>
    )
}

export default Products;

