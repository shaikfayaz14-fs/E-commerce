import { Link } from "react-router-dom"
import { watchData} from "../data/watch"
import { usecart } from "../context/usecontext"
function Watch()
{
     const newdata= watchData.slice(0,5)
      const {Additems}=usecart()
    return(
        <div>
            <h3>WATCH</h3>
        <div id="watch">    
              {
                newdata.map((e)=>
                {
                    return(
                        <div id="watc">
                            <Link to={`/watch/${e.id}`}>
                        
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
export default Watch