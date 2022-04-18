
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Home/Home/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import {createContext, useState} from 'react';

export const ServiceContext = createContext();

function App() {

const [services, setServices] = useState([]);
console.log(services);

  return (
    
      <ServiceContext.Provider value = {[services, setServices]}>
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/serviceDetail' element={<ServiceDetail></ServiceDetail>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    </ServiceContext.Provider>
  );
}

export default App;
