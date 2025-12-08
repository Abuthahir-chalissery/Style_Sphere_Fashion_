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

function App() {

  const [product, setProducts] = useState([])
  const [error , setError] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(()=> {

    const getProducts = async () => {
      try{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json()
        setProducts(data);
      }catch (error) {
        setError("Products Not found...")
      }finally{
        setTimeout( () => {
          setLoading(false)
        },1000)
      }
    }

    getProducts();

  },[])

  if (loading) return <Loading/>



  return (
    <>
      <div className='w-full h-auto md:bg-gray-100  flex justify-center'>
        <div className='w-full flex flex-col items-center h-auto gap-5'>
          <Router>
            <Routes>
              <Route exact path='/' element={<Home product={product} loading={loading} error={error}/>} />
              <Route exact path='/product-lists'  element={<ProductList product={product} error={error}/>} />
              <Route path='/product-lists/:id' element={<ProductDetails id={product} />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  )
}

export default App
