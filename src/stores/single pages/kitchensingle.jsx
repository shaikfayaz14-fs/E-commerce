import { useParams } from "react-router-dom"
import Navbar from "../components/navbar"
import { kitchenData } from "../data/kitchen"
import { usecart } from "../context/usecontext"
function Kitchensingle()
{
    const {id}=useParams()
        const {Additems}=usecart()
    const product=kitchenData.find((e)=>e.id===id)
    console.log(product)
    return(
       <div >
        <Navbar/>
        <div id="sing">
         <div id="single">
            
            <img src={product.image} id="singleimg"/>
            
            
        </div>
        <div id="model">
            <h1>{product.model}</h1>
            <h2>{product.price}</h2>
            <h2>{product.description}</h2>
     <div id="butt">
          <button type="button" class="btn btn-info">Buy now</button>
          <button type="button" class="btn btn-warning"onClick={()=>Additems(product)}>Add to Cart </button>
     </div>
        </div>
       </div>
       </div>
    )
}
export default Kitchensingle