import {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch() {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                'https://fakestoreapi.com/products'
            );
            setProductList(response.data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);            
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {loading, productList, error};
}


export default useFetch;