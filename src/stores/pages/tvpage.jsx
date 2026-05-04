import { Link } from "react-router-dom"
import Navbar from "../components/navbar"
import { tvData } from "../data/tv"
import { useState } from "react"

function Tvpage()
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
            let maindata=selected.length==0?tvData:tvData.filter((e)=>selected.includes(e.brand))
    return(
        <div>
        <Navbar/>
         <div id="container">
            
           <div id="choices">
            {
             tvData.map((e)=>
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
                           <Link to={`/tv/${e.id}`}>
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
export default Tvpage