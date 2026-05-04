import { useParams, Link } from "react-router-dom"
import Navbar from "../components/navbar"

// import all data
import { mobileData } from "../data/mobiles"
import { watchData } from "../data/watch"
import { acData } from "../data/ac"
import { booksData } from "../data/books"
import { computerData } from "../data/computers"
import { fridgeData } from "../data/fridge"
import { furnitureData } from "../data/furniture"
import { kitchenData } from "../data/kitchen"
import { menData } from "../data/men"
import { speakerData } from "../data/speaker"
import { tvData } from "../data/tv"
import { womanData } from "../data/woman"

function SearchPage() {
    const { query } = useParams()

    const allProducts = [
        ...mobileData,
        ...watchData,
        ...acData,
        ...booksData,
        ...computerData,
        ...fridgeData,
        ...furnitureData,
        ...kitchenData,
        ...menData,
        ...speakerData,
        ...tvData,
        ...womanData,
    ]

    const filtered = allProducts.filter((item) => {
        const text = query.toLowerCase()
        return (
            item.company?.toLowerCase().includes(text) ||
            item.brand?.toLowerCase().includes(text) ||
            item.model?.toLowerCase().includes(text) ||
            item.title?.toLowerCase().includes(text)
        )
    })

    return (
        <div>
            <Navbar />
            <h2>Search Results for "{query}"</h2>

            <div id="items">
                {filtered.length > 0 ? (
                    filtered.map((e, index) => (
                        <div key={index}>
                            {/* ✅ IMPORTANT FIX: pass id + category */}
                            <Link to={`/product/${e.id}?cat=${e.category}`}>
                                <img src={e.image} alt="" />
                            </Link>

                            <h3>{e.company || e.brand || e.model || e.title}</h3>
                            <h4>{e.price}</h4>
                        </div>
                    ))
                ) : (
                    <h2>No products found</h2>
                )}
            </div>
        </div>
    )
}

export default SearchPage 