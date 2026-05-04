import { Link } from "react-router-dom"
import {computerData} from "../data/computers"
import { usecart } from "../context/usecontext"
function Computer()
{
     const newdata=computerData.slice(0,5)
     const {Additems}=usecart()
    return(
        <div>
            <h3>COMPUTERS</h3>
        <div id="computer">    
              {
                newdata.map((e)=>
                {
                    return(
                        <div id="compu">
                            <Link to={`/computer/${e.id}`}>
                                <img src={e.image} id="comimg"/>
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
export default Computer