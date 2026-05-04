import { Link } from "react-router-dom"
import Navbar from "../components/navbar"
import { fridgeData } from "../data/fridge"
import { useState } from "react"

function Fridgepage()
{
     let [selected,setselected]=useState([])
            function Check(val)
            {
                console.log(val)
                console.log(selected.includes(val))
                if(selected.includes(val))
                {
                    let newdata=selected.filter((e)=>e!=val)
                    setselected(newdata)
                }
                else{
                    setselected([...selected,val])
                }
            }
            console.log(selected)
            let maindata=selected.length==0?fridgeData:fridgeData.filter((e)=>selected.includes(e.brand))
    return(
        <div>
        <Navbar/>
         <div id="container">
            
           <div id="choices">
            {
             fridgeData.map((e)=>
            {
                return(
                   <div>
                     <input type="checkbox" onChange={()=>Check(e.brand)}></input>{e.brand}
                    </div>
                )
            })
            }
            
           </div>
           <div id="items">
                {
                   maindata.map((e)=>
                {
                    return(
                        <div>
                           <Link to={`/fridge/${e.id}`}>
                            <img src={e.image}/>
                           </Link>
                            <h1>{e.brand}</h1>
                            <h1>{e.price}</h1>
                        </div>
                    )
                })
                }
            </div>
        </div>
       </div>
    )
}
export default Fridgepage