
import { Route, Routes } from 'react-router-dom';
import './App.css';
import News from './components/News/News.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import Service from './components/Service/Service.js';
import Contact from './components/Contact/Contact.js';
import Home from './components/Home/Home.js';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ReadMore from './components/ReadeMore/ReadMore';
import MoreInfo from './components/MoreInfo/MoreInfo';
import Admin from './components/Admin panel/Admin';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/readmore' element={<ReadMore />} />
        <Route path='/moreinfo' element={<MoreInfo />} />
        <Route path='/admin' element={<Admin />} />
      
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
