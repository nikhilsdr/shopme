import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from "../constants/productConstans";

const productListReducers = (state={ allProducts:[] }, action)=>{
    console.log(action.type);
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading:true}
        case PRODUCT_LIST_SUCCESS:
            return { loading:false, allProducts: action.payload}
        case PRODUCT_LIST_FAIL:
            return { loading:false, error:action.payload}
        default:
            return state;
        
    }
}

export default productListReducers;