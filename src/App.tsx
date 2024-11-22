import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Portafolio } from './components/Portafolio';
import { Contact } from './components/Contact';
import { Layout } from './components/Layout';
import { Hotel } from './components/Hotel';
import { EmailSender } from './components/EmailSender';
import { ShopingCart } from './components/ShopingCart';
import { ReactForm } from './components/ReactForm';
import { AllProyects } from './components/AllProyects';
import "./app.css";

export const App: React.FC = () => {

  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />}></Route>
            <Route path='/resume' element={<Resume />}></Route>
            <Route path='/portafolio' element={<Portafolio />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/hotel' element={<Hotel/>}></Route>
            <Route path='/email-sender' element={<EmailSender/>}></Route>
            <Route path='/shoping-cart' element={<ShopingCart/>}></Route>
            <Route path='/react-form' element={<ReactForm/>}></Route>
            <Route path='/see-all' element={<AllProyects/>}></Route>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}