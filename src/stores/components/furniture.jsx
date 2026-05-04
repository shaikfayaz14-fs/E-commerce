import { Link } from "react-router-dom"
import { furnitureData} from "../data/furniture"
import { usecart } from "../context/usecontext"
function Furniture()
{
     const newdata= furnitureData.slice(0,5)
      const {Additems}=usecart()
    return(
        <div>
            <h3>FURNITURER</h3>
        <div id="watch">    
              {
                newdata.map((e)=>
                {
                    return(
                        <div id="watc">
                            <Link to={`/furniture/${e.id}`}>

                            <img src={e.image} id="furni"/>
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
export default Furniture