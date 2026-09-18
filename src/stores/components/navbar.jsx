import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { usecart } from "../context/usecontext"

function Navbar() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  const { cartitems } = usecart()

  function handleSearch(event) {
    event.preventDefault()
    const query = search.trim()

    if (query) {
      navigate(`/search/${encodeURIComponent(query)}`)
    }
  }

  return (
    <header>
      <div id="navbar">
        <div id="links">
          <h1 id="pn">PrimeNest</h1>
          <Link to="/">Home</Link>
          <Link to="/signup">Sign up</Link>
          <Link to="/cart">
            Cart <span className="badge text-bg-secondary">{cartitems.length}</span>
          </Link>
        </div>

        <form id="search" onSubmit={handleSearch} role="search">
          <label htmlFor="product-search" className="visually-hidden">
            Search products
          </label>
          <input
            id="product-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products..."
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>
      <nav id="subnav" aria-label="Product categories">
        <Link to="/mobiles">Mobiles</Link>
        <Link to="/computer">Computers</Link>
        <Link to="/watch">Watch</Link>
        <Link to="/speaker">Speaker</Link>
        <Link to="/tv">TV</Link>
        <Link to="/ac">AC</Link>
        <Link to="/fridge">Fridge</Link>
        <Link to="/furniture">Furniture</Link>
        <Link to="/books">Books</Link>
        <Link to="/kitchen">Kitchen</Link>
        <Link to="/men">Men's</Link>
        <Link to="/women">Women</Link>
      </nav>
    </header>
  )
}

export default Navbar
