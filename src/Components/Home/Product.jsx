import { NavLink } from "react-router-dom"

export const Product = ({ product }) => {
  return (
    <>
      <div className="product-card" key={product.id}>
        <img src={product.image} alt={`Product ${product.title}`} />
        <h3>{product.title.length >= 19 ? `${product.title.slice(0, 18)}...` : product.title}</h3>
        <p className="price">$19.99</p>
        <NavLink to={`/products/${product.id}`} className="detail-btn">
          View Details
        </NavLink>
      </div >
    </>
  )
}