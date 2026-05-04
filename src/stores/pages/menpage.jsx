import { Link } from "react-router-dom"
import Navbar from "../components/navbar"
import { menData } from "../data/men"
import { useState } from "react"

function Menpage()
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
            let maindata=selected.length==0?menData:menData.filter((e)=>selected.includes(e.brand))
    return(
        <div>
        <Navbar/>
         <div id="container">
            
           <div id="choices">
            {
             menData.map((e)=>
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
                            <Link to={`/men/${e.id}`}>
                            <img src={e.image} id="menpage"/>
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
export default Menpage