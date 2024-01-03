import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Addproduct } from "./action"





const ProductDetails=()=>{

    const productstate=useSelector(state=>state.productdata)
    console.log(productstate)

  const dispatch=useDispatch()

    useEffect(()=>{
        loadproducts()
    },[])

    
const loadproducts=()=>{
 axios.get('https://fakestoreapi.com/products')
 .then(Response=>{
    dispatch(Addproduct(Response.data))
    console.log(Response.data)


 })

}


    return(
        <>
        <h1>products</h1>
        {
            productstate.all_products.map((val)=>{
                return(
                    <h1>{val.title}</h1>
                )
            })
        }
        </>
    )
}
export default ProductDetails