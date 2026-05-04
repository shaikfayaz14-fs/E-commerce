import { Link } from "react-router-dom"
import { tvData} from "../data/tv"
import { usecart } from "../context/usecontext"
function Tv()
{
     const newdata=tvData.slice(0,5)
      const {Additems}=usecart()
    return(
        <div>
            <h3>TV</h3>
        <div id="speaker">    
              {
                newdata.map((e)=>
                {
                    return(
                        <div id="speak">
                            <Link to={`/tv/${e.id}`}>
                         
                            <img src={e.image} id="speakimg"/>
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
export default Tv