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

  // Cart Context
  const [cart, setCart] = useState([]);
  const addToCart = ((product) => {
    setCart((prevCart) => {
      const isExist = prevCart.find((item) => item.id === product.id)
      if (isExist) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );

      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    })
  })

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== id)
    })
  }

  const updateQuantity = (id, qty) => {
    setCart((prev) => {
     return prev.map((item) => item.id === id ? { ...item, qty: qty } : item
      )
    })
  }

  return (
    <ProductContext.Provider value={{ products, loading, cart, setCart, addToCart, removeFromCart, updateQuantity }} >
      {children}
    </ProductContext.Provider>
  )
}