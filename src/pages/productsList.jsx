import axios from "axios"
import { useEffect, useState } from "react"
import { CardProduct } from "../components/CardProduct"


export function ProductList() {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await axios.get("https://dummyjson.com/products")
        const data = response.data.products
        setProducts(data)
        console.log(data)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="flex flex-row justify-center flex-wrap gap-6">
            {products.map((product) => (
              <CardProduct product={product} key={product.id}/>
            ))}
        </div>
    )
}