import { createContext, useEffect, useState } from "react"
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiData = async () => {
    try {
      const apiUrl = await fetch('https://fakestoreapi.com/products');
      const data = await apiUrl.json();
      setProducts(data)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    apiData();
  }, [])


  return (
    <ProductContext.Provider value={{ products, loading }} >
      {children}
    </ProductContext.Provider>
  )
}