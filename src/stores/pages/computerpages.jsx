import { Link } from "react-router-dom"
import Navbar from "../components/navbar"
import { computerData } from "../data/computers"
import { useState } from "react"

function Computerpage()
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
            let maindata=selected.length==0?computerData:computerData.filter((e)=>selected.includes(e.company))
    return(
        <div>
        <Navbar/>
         <div id="container">
            
           <div id="choices">
            {
             computerData.map((e)=>
            {
                return(
                   <div>
                     <input type="checkbox" onChange={()=>Check(e.company)}></input>{e.company}
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
                          <Link to={`/computer/${e.id}`}>
                              <img src={e.image}/>
                          </Link>
                            <h1>{e.model}</h1>
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
export default Computerpage