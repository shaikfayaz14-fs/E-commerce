import Navbar from "../components/navbar"
import { usecart } from "../context/usecontext"

function Cartdata() {
  const { cartitems, Remove } = usecart()

  return (
    <div>
      <Navbar />
      <main id="cartdata" aria-labelledby="cart-title">
        <h1 id="cart-title">Your cart</h1>
        {cartitems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartitems.map((item) => (
            <article key={item.id}>
              <img src={item.image} alt={item.model || item.company || "Product"} />
              <h2>{item.company || item.brand || item.model}</h2>
              {item.model && <p>{item.model}</p>}
              <p>{item.price}</p>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => Remove(item.id)}
              >
                Remove
              </button>
            </article>
          ))
        )}
      </main>
    </div>
  )
}

export default Cartdata
