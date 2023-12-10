
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import SearchWindow from './pages/SearchWindow';
import GetYourBook from './pages/GetYourBook';
import AllCategory from './pages/AllCategory';




function App() {
  return (
   <>
    <Header/>

      <div className='container'>

          <Routes>

            <Route path='/' element={<Login/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/searchwindow' element={ <SearchWindow/>} />
            <Route path='/getyourbook' element={ <GetYourBook/>} />
            <Route path='/allcategory' element={<AllCategory />} />
            
            
          

          </Routes>
        

      </div>

    <Footer/>  
   </>
  );
}

export default App;
