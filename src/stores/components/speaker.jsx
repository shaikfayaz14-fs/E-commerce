import { Link } from "react-router-dom"
import { speakerData} from "../data/speaker"
import { usecart } from "../context/usecontext"
function Speaker()
{
     const newdata= speakerData.slice(0,5)
      const {Additems}=usecart()
    return(
        <div>
            <h3>SPEAKER</h3>
        <div id="speaker">    
              {
                newdata.map((e)=>
                {
                    return(
                        <div id="speak">
                            <Link to={`/speaker/${e.id}`}>
                         
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
export default Speaker