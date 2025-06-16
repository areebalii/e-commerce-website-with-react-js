import { createContext } from "react"
import { NavLink } from "react-router-dom"
import { ProductContext } from "../../Product context/ProductContext"

export const Product = ({ product }) => {

  const { addToCart } = createContext(ProductContext)
  if (!product) return null

  return (
    <>
      <div className="product-card" key={product.id}>
        <img src={product.image} alt={`Product ${product.title}`} />
        <h3>{product.title.length >= 19 ? `${product.title.slice(0, 18)}...` : product.title}</h3>
        <p className="price">$19.99</p>
        <NavLink to={`/products/${product.id}`} className="detail-btn">
          View Details
        </NavLink>

        <button className="addToCart" onClick={() => addToCart(product)}>Add to Cart</button>
      </div >
    </>
  )
}