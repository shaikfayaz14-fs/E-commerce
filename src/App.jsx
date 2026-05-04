import { Routes ,Route} from "react-router-dom"
import Landingpage from "./stores/pages/landingpages"
import Acpage from "./stores/pages/acpages"
import Computerpage from "./stores/pages/computerpages"
import Speakeerpage from "./stores/pages/speakerpage"
import Tvpage from "./stores/pages/tvpage"
import Watchpage from "./stores/pages/watchpages"
import Fridgepage from "./stores/pages/fridgepage"
import Furniturepage from "./stores/pages/furniturepage"
import Bookpage from "./stores/pages/bookspage"
import Kitchenpage from "./stores/pages/kitchen"
import Menpage from "./stores/pages/menpage"
import Womenpage from "./stores/pages/womenpage"
import Mobilesingle from "./stores/single pages/mobilesinge"
import Acsingle from "./stores/single pages/acsingle"
import Booksingle from "./stores/single pages/booksingle"
import Computersingle from "./stores/single pages/computersingle"
import Fridgesingle from "./stores/single pages/fridgesingle"
import Furnituresingle from "./stores/single pages/furnituresingle"
import Kitchensingle from "./stores/single pages/kitchensingle"
import Mensingle from "./stores/single pages/mensingle"
import Speakersingle from "./stores/single pages/speakersingle"
import Tvsingle from "./stores/single pages/tvsingle"
import Watchsingle from "./stores/single pages/watchsingle"
import Womensingle from "./stores/single pages/womensingle"
import Mobilespage from "./stores/pages/mobilespage"
import About from "./stores/pages/aboutus"
import Contact from "./stores/pages/contactus"
import SearchPage from "./stores/pages/searchpage"
import Cartdata from "./stores/cart/carddata"
import Auth from "./stores/pages/Auth"
function App() {
  

  return (
   <div>
   
    <Routes>
      <Route path="/"element={<Landingpage/>}/>
      <Route path="/mobiles"element={<Mobilespage/>}/>
      <Route path="/ac"element={<Acpage/>}/>
      <Route path="/computer"element={<Computerpage/>}/>
      <Route path="/speaker"element={<Speakeerpage/>}/>
      <Route path="/tv"element={<Tvpage/>}/>
      <Route path="/watch"element={<Watchpage/>}/>
      <Route path="/fridge"element={<Fridgepage/>}/>
      <Route path="/furniture"element={<Furniturepage/>}/>
      <Route path="/books"element={<Bookpage/>}/>
      <Route path="/kitchen"element={<Kitchenpage/>}/>
      <Route path="/men"element={<Menpage/>}/>
      <Route path="/women"element={<Womenpage/>}/>
      <Route path="/mobiles/:id" element={<Mobilesingle/>} />
      <Route path="/ac/:id" element={<Acsingle/>}/>
      <Route path="/book/:id" element={<Booksingle/>}/>
      <Route path="/computer/:id" element={<Computersingle/>}/>
      <Route path="/fridge/:id" element={<Fridgesingle/>}/>
      <Route path="/furniture/:id" element={<Furnituresingle/>}/>
      <Route path="/kitchen/:id" element={<Kitchensingle/>}/>
      <Route path="/men/:id" element={<Mensingle/>}/>
      <Route path="/speaker/:id" element={<Speakersingle/>}/>
      <Route path="/tv/:id" element={<Tvsingle/>}/>
      <Route path="/watch/:id" element={<Watchsingle/>}/>
      <Route path="/women/:id" element={<Womensingle/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/search/:query" element={<SearchPage/>} />
      <Route path="/Cart"element={<Cartdata/>}/>
      <Route path="/signup" element={<Auth/>}/>
    </Routes>
   </div>
  )
}

export default App
