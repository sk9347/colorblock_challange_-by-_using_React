


const ProductInitial={

    all_products:[],
    cart_products:[],
    products_load_succes:false

}


const ProductReducer=(state=ProductInitial,action)=>{

    switch(action.type){

        case "SUCCESS":
            return {...state,all_products:action.payload,products_load_succes:true}

            case "ADD_TO_CART":
                return {...state,cart_products:["item"]}

            default :
            return state
    }


}
export default ProductReducer