import { useEffect, useState } from 'react'
import './App.css'
import './Styles/global.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router , Routes , Route, data} from 'react-router-dom'
import ProductList from './pages/ProductList'
import Deals from './components/Deals'

function App() {

  const [product, setProducts] = useState([])

  useEffect(()=> {

    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(product => setProducts(product));

  },[])
  



  return (
    <>
      <div className='w-full h-auto md:bg-gray-100  flex justify-center'>
        <div className='w-full flex flex-col items-center h-auto gap-5'>
          <Router>
            <Routes>
              <Route exact path='/' element={<Home product={product}/>} />
              <Route exact path='/product-lists' element={<ProductList product={product}/>} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  )
}

export default App
