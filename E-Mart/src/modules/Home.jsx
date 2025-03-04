import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=12')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <Categories/>
      <div className="flex flex-col text-center w-full mt-1rem">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font ">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
      </div>
      {
        products.length > 0 ? 
        <ProductCard products={products} /> 
        :
        <div>Loading.....</div>
      }
    </>
  )
}

export default Home