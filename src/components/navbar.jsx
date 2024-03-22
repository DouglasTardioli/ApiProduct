import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";


export function Navbar() {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!search) return
        navigate(`/search?q=${search}`)
        setSearch("")
    }

    return (
        <div className="w-full flex p-6 items-center flex-row justify-between max-w-[1080px]">
            <Link to={'/'}><p className="font-bold text-lg">ProductList</p></Link>
            <form onSubmit={handleSubmit}>
                <nav className="flex items-center gap-2 bg-slate-800 h-12 w-60 justify-between p-5 rounded-md">
                    <input
                        type="text"
                        className="rounded-md text-sm text-zinc-900 p-1 w-40 placeholder:text-xs"
                        placeholder="Procurar produto"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    <button type="submit"><LuSearch /></button>
                </nav>
            </form>
        </div>
    )
}