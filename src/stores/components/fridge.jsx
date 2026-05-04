import { Link } from "react-router-dom"
import { fridgeData} from "../data/fridge"
import { usecart } from "../context/usecontext"
function Fridge()
{
     const newdata= fridgeData.slice(0,5)
      const {Additems}=usecart()
    return(
        <div>
            <h3>FRIDGE</h3>
        <div id="watch">    
              {
                newdata.map((e)=>
                {
                    return(
                        <div id="watc">
                           <Link to={`/fridge/${e.id}`}>
                             <img src={e.image} id="watimg"/>
                           </Link>
                            <h4>{e.brand}</h4>
                            <h2>{e.price}</h2>
                            <button className="btn btn-primary"onClick={()=>{Additems(e)}}>Add to Cart</button>
                        </div>
                    )
                })
              }
        </div>
        </div>
    )
}
export default Fridge