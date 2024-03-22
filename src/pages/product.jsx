
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CardProduct } from "../components/CardProduct"



const URL =  import.meta.env.VITE_API

export function Product() {
    const {id} = useParams()
    const [product, setProduct] = useState(null)

    const getProduct = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        setProduct(data)
        console.log(data)
    }

    useEffect(() => {
        const productUrl = `${URL}/${id}`
        getProduct(productUrl)
    }, [])

    return (
        <div className="flex flex-col justify-center gap-6">
           {product && (<>
           <CardProduct product={product} showLink={false} />
           <Link className="w-60 h-8 flex items-center justify-center rounded-md bg-slate-900 text-xs hover:bg-slate-900/60" to={'/'}>Voltar aos produtos</Link>
           </>)}
        </div>
    )
}