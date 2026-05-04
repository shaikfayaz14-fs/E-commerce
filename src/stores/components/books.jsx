import { Link } from "react-router-dom"
import { booksData} from "../data/books"
import { usecart } from "../context/usecontext"
function Books()
{
     const newdata= booksData.slice(0,5)
     const {Additems}=usecart()
    return(
        <div>
            <h3>BOOKS</h3>
        <div id="watch">    
              {
                newdata.map((e)=>
                {
                    return(
                        <div id="watc">
                            <Link to={`/book/${e.id}`}>
                                <img src={e.image} id="watimg"/>
                            </Link>
                            <h4>{e.title}</h4>
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
export default Books