import { Link } from "react-router-dom"
import {mobileData} from "../data/mobiles"
import { usecart } from "../context/usecontext"
function Mobile()
{
     const newdata=mobileData.slice(0,5)
     const {Additems}=usecart()
    return(
      <div> 
        <h3>MOBILES</h3>
        <div id="mobile">    
              {
                newdata.map((e)=>
                {
                    return(
                        <div id="mobi">
                          <Link to={`/mobiles/${e.id}`}>
                                <img src={e.image} id="mobimg"/>
                          </Link>
                            <h4>{e.company}</h4>
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
export default Mobile