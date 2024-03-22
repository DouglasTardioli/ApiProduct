import { Link } from "react-router-dom";


export function CardProduct({ product, showLink = true }) {
    return (
        <div className="w-60 h-96 bg-slate-800 p-4 rounded-md drop-shadow-lg flex items-center flex-col justify-center overflow-hidden" key={product.id}>
            <div className="h-36 p-1 flex flex-col items-center justify-center  flex-1">
                <img src={product.thumbnail} alt="" className="max-h-36 rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="font-bold text-sm text-left">{product.title}</h3>
                <p className="text-left text-xs">{product.description}</p>
                <div className="flex flex-row items-center justify-center gap-2">
                    <div className="flex flex-col">
                        <span className="text-xs">Preço</span>
                        <span className="text-xs">R${product.price}</span>
                    </div>
                    <div className="w-px h-8 bg-zinc-400" />
                    <div className="flex flex-col">
                        <img src="src\assets\star.svg" alt="" className="w-5 h-5" />
                        <span className="text-xs">{product.rating}</span>
                    </div>
                </div>
                {showLink && <Link className="w-full flex items-center justify-center h-8 rounded-md bg-slate-900 text-xs hover:bg-slate-900/60" to={`${product.id}`}>Ver Produto</Link>}

            </div>
        </div>



    )
}