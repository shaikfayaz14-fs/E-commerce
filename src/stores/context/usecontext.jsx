import { Children, createContext,useContext, useState } from "react"
const cartcontext= createContext()
export function CartProvider({children})
{
    const[cartitems,setcartitems]=useState([])
    function Additems(val)
    {
        setcartitems([...cartitems,val])
    }
    function Remove(val)
    {
        let newdata=cartitems.filter((item)=>item.company!=val)
        setcartitems(newdata)
    }
    return(
        <div>
            <cartcontext.Provider value={{cartitems,Additems,Remove}}>
                {children}
            </cartcontext.Provider>
        </div>
    )
}
export const usecart=()=>
{
    return useContext(cartcontext)
} 