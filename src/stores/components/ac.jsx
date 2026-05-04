import { Link } from "react-router-dom"
import { acData } from "../data/ac"
import { usecart } from "../context/usecontext"
function Aircondition()
{
     const newdata= acData .slice(0,5)
     const {Additems}=usecart()
    return(
        <div>
            <h3>AC</h3>
        <div id="ac">    
              {
                newdata.map((e)=>
                {
                    return(
                        <div id="airc">
                           <Link to={`/ac/${e.id}`}>
                                 <img src={e.image} id="acimg"/>
                           </Link>
                            <h4>{e.company}</h4>
                            <h2>{e.price}</h2>
                            <button className="btn btn-primary" onClick={()=>{Additems(e)}}>Add to Cart</button>
                        </div>
                    )
                })
              }
        </div>
        </div>
    )
}
export default Aircondition