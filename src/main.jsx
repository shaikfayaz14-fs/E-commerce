import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./style.css"
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './stores/context/usecontext.jsx'
createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    
    <CartProvider>
      <App/>
     
    </CartProvider>
    </BrowserRouter>
  
)
