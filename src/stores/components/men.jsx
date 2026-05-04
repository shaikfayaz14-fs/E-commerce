import { Link } from "react-router-dom"
import {  menData} from "../data/men"
import { usecart } from "../context/usecontext"
function Men()
{
     const newdata=  menData.slice(0,5)
      const {Additems}=usecart()
    return(
        <div>
            <h3>MENS WEAR</h3>
        <div id="men">    
              {
                newdata.map((e)=>
                {
                    return(
                        <div id="menc">
                            <Link to={`/men/${e.id}`}>
                            <img src={e.image} id="menimg"/>
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
export default Men