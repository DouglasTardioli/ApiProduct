import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { CardProduct } from "../components/CardProduct"

const searchProduct = import.meta.env.VITE_API_SEARCH

export function Search() {
    const [searchParams] = useSearchParams()
    const [products, setProducts] = useState([])
    const query = searchParams.get("q")

    const getSearchProduct = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        setProducts(data.products)
        console.log(data)
      
    }

    useEffect(() => {
        const searchWithQuery = `${searchProduct}?q=${query}`
        getSearchProduct(searchWithQuery)
    }, [query])

    return (
        <div className="flex flex-col gap-6">
            <h1>Resultador para <span>{query}</span></h1>
            <div className="flex flex-row justify-center flex-wrap gap-6">
            {products.map((product) => (
                <CardProduct product={product} key={product.id} />
            ))}
            </div>
        </div>
    )
}