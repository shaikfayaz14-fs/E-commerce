import { Link } from "react-router-dom"
import Navbar from "../components/navbar"
import { booksData } from "../data/books"
import { useState } from "react"


function Bookpage()
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
            let maindata=selected.length==0?booksData:booksData.filter((e)=>selected.includes(e.title))
    return(
        <div>
        <Navbar/>
         <div id="container">
            
           <div id="choices">
            {
             booksData.map((e)=>
            {
                return(
                   <div>
                     <input type="checkbox" onChange={()=>Check(e.title)}></input>{e.title}
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
                          <Link to={`/book/${e.id}`}>
                            <img src={e.image} />
                          </Link>
                            <h1>{e.title}</h1>
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
export default Bookpage