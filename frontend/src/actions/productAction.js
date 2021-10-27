import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from "../constants/productConstans";
import axios from "axios";


export const listproducts = () => async (dispatch)=> {
    console.log("redux-1");
dispatch({
    type:PRODUCT_LIST_REQUEST
})
    try{
        const  alldata  = await axios.get('/api/products');
        console.log("redux-",alldata);
        dispatch({
            type:PRODUCT_LIST_SUCCESS,
            payload: alldata
        })
    }catch(error){
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload: error.message
        })
    }
}