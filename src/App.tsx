import HomePage from "./layouts/HomePage/HomePage";
import Products from "./layouts/Products/Products";

import Navbars from "./components/Header/Navbars/Navbars";
import Footer from "./components/Footer/Footer";

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path='/' element={< HomePage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/basket' element={<Basket/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
