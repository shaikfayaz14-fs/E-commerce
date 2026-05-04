import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { usecart } from "../context/usecontext"

function Navbar() {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const {cartitems}=usecart()
    function handleSearch() {
        if (search.trim() !== "") {
            navigate(`/search/${search}`)
        }
    }

    return (
        <div>
            <div id="navbar">
                <div id="links">
                    <h1 id="pn">PrimeNest</h1> 
                    <Link to="/">Home</Link>
                    <Link to="/signup">Sign up</Link>
                    <Link to="/cart">Cart<span class="badge text-bg-secondary"> {cartitems.length}</span></Link>
                </div>

                <div id="search">
                    <input 
                        type="text"
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        placeholder="Search products..."
                    />
                    <button 
                        className="btn btn-primary"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>
  <div id="subnav">
    <Link to="/mobiles">Mobiles</Link>
    <Link to="/computer">Computers</Link>
    <Link to="/watch">Watch</Link>
    <Link to="/speaker">Speaker</Link>
    <Link to="/tv">Tv</Link>
    <Link to="/ac">Ac</Link>
    <Link to="/fridge">Fridge</Link>
    <Link to="/furniture">Furniture</Link>
    <Link to="/books">Books</Link>
    <Link to="/kitchen">Kitchen</Link>
    <Link to="/men">Mens</Link>
    <Link to="/women">Women</Link>
   </div>
        </div>
    )
}

export default Navbar