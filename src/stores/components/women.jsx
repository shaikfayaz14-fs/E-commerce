import { Link } from "react-router-dom"
import {  womanData} from "../data/woman"
import { usecart } from "../context/usecontext"
function Women()
{
     const newdata=  womanData.slice(0,5)
      const {Additems}=usecart()
    return(
        <div>
            <h3>WOMENS WEAR</h3>
        <div id="men">    
              {
                newdata.map((e)=>
                {
                    return(
                        <div id="menc">
                            <Link to={`/women/${e.id}`}>
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
export default Women