
import React from 'react'
 import Navbar from './Components/Navbar.js'
 import Adduser from './Components/Adduser.js'
 import Allusers from './Components/Allusers.js'
 import Welcome from './Components/Welcome.js'
 import Edituser from './Components/Edituser.js'
 import{BrowserRouter,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Welcome/>}/>
   <Route path="/add" element={<Adduser/>}/>
   <Route path="/all" element={<Allusers/>}/>
  <Route path="/edit/:id" element={<Edituser/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App