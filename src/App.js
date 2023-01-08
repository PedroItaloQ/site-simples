import {  Routes, Route, BrowserRouter, NavLink } from 'react-router-dom'
import Home from './componentes/pages/Home'
import Company from './componentes/pages/Company'
import Contact from './componentes/pages/Contact'
import NewProject from './componentes/pages/NewProject'
import Registrar from './componentes/pages/Registrar'
import Login from './componentes/pages/Login'

import Container from './componentes/layout/Container'
import Navbar from './componentes/layout/Navbar'


function App() {
  return (
    <div>
    <BrowserRouter> 
    <Navbar/>
      <Container>
        <Routes>
          <Route path= "/" element={<Home/>}/> 
          <Route path= "/Company" element={<Company/>}/> 
          <Route path= "/Contact" element={<Contact/>}/> 
          <Route path= "/NewProject" element={<NewProject/>}/>     
          <Route path= "/Login" element={<Login/>}/>     
          <Route path= "/Registrar" element={<Registrar/>}/>     
        </Routes>
      </Container>
  </BrowserRouter>
     </div>
  );
}

export default App;
