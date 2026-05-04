import Navbar from "../components/navbar"
import { usecart } from "../context/usecontext"

function Cartdata()
{
    let {cartitems,Remove}=usecart()
    console.log(cartitems)
    
    return(
        <div>
            <Navbar/>
            <div id="cartdata">
                {
                    cartitems.map((item)=>
                    {
                        return(
                            <div>
                                
                                <img src={item.image}/>
                                
                                <h1>{item.company}</h1>
                                <button type="button" class="btn btn-danger" onClick={()=>Remove(item.company)}>Remove</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Cartdata