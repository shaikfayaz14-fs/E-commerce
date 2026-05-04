import Computer from "./stores/components/computer"
import Mobile from "./stores/components/mobile"
import Navbar from "./stores/components/navbar"
import Watch from "./stores/components/watch"
import Speaker from "./stores/components/speaker"
import Aircondition from "./stores/components/ac"
import Tv from "./stores/components/tv"
import Fridge from "./stores/components/fridge"
import Furniture from "./stores/components/furniture"
import Books from "./stores/components/books"
import Kitchen from "./stores/components/kitchen"
import Men from "./stores/components/men"
import Women from "./stores/components/women"
import Curosal from "./stores/components/carsoul"
import Footer from "./stores/components/aboutlast"
function Product()
{
   
    return(
        <div>
            <Navbar/>
            <Curosal/>
            <Mobile/>
            <Computer/>
            <Watch/>
            <Speaker/>
            <Tv/>
            <Aircondition/>
            <Fridge/>
            <Furniture/>
            <Books/>
            <Kitchen/>
            <Men/>
            <Women/>
            <Footer/>
        </div>
    )
}
export default Product