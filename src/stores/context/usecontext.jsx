import { createContext, useContext, useMemo, useState } from "react"

const cartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartitems, setCartitems] = useState([])

  function Additems(product) {
    setCartitems((currentItems) => {
      const alreadyInCart = currentItems.some((item) => item.id === product.id)
      return alreadyInCart ? currentItems : [...currentItems, product]
    })
  }

  function Remove(productId) {
    setCartitems((currentItems) =>
      currentItems.filter((item) => item.id !== productId),
    )
  }

  const value = useMemo(
    () => ({ cartitems, Additems, Remove }),
    [cartitems],
  )

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>
}

export function usecart() {
  const context = useContext(cartContext)

  if (!context) {
    throw new Error("usecart must be used inside a CartProvider")
  }

  return context
}
