import { useEffect, useState } from 'react'
import './App.css'
import './Styles/global.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import ProductList from './pages/ProductList'
import Deals from './components/Deals'
import Loading from './components/Loading'
import ProductDetails from './pages/ProductDetails'
import { Products } from './Products/Products'
import Cart from './pages/Cart'

function App() {

  const [product, setProducts] = useState(Products)
  // const [error , setError] = useState(null)
  const [loading, setLoading] = useState(true)


  // useEffect(()=> {

  //   const getProducts = async () => {
  //     try{
  //       const response = await fetch('https://fakestoreapi.com/products');
  //       const data = await response.json()
  //       setProducts(data);
  //     }catch (error) {
  //       setError("Products Not found...")
  //     }finally{
  //       setTimeout( () => {
  //         setLoading(false)
  //       },1000)
  //     }
  //   }

  //   getProducts();

  // },[])

  // if (loading) return <Loading/>

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  })

  if (loading) return <Loading/>



  return (
    <>
      <div className='w-full h-auto bg-gray-100  flex justify-center'>
        <div className='w-full flex flex-col items-center h-auto gap-5'>
          <Router>
            <Routes>
              <Route exact path='/' element={<Home product={product} loading={loading}/>} />
              <Route exact path='/product-lists'  element={<ProductList product={product} loading={loading}/>} />
              <Route path='/product-lists/:id' element={<ProductDetails/>} />
              <Route path='/cart' element={<Cart/>} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  )
}

export default App
