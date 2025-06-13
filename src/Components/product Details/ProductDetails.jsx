import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../Product context/ProductContext";
import "./ProductDetails.css"

export const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [Quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { loading, products } = useContext(ProductContext);

  useEffect(() => {
    if (!loading) {
      const findProduct = products.find((item) => {
        return item.id == parseInt(id);
      })
      setProduct(findProduct)
    }
  }, [id, loading, products]);

  if (loading || !product) {
    return <h1 className="loading">Loading...</h1>
  }
  if (!product && !loading) {
    <p>Product not found.</p>;
  }
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value)
    if(value >= 1) setQuantity(value)
  }


  return (
    <>
      <div className="product-detail">
        <img src={product.image} alt={product.title} className="detail-image" />
        <div className="detail-info">
          <h2>{product.title}</h2>
          {/* Availability */}
          <p className={`availability ${product.rating.count > 0 ? "in-stock" : "out-of-stock"}`}>
            {product.rating.count > 0 ? "In Stock" : "Out of Stock"}
          </p>
          <p>{product.description}</p>
          <p className="rating">⭐ {product.rating.rate} / 5</p>
          <label>
            Size:
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="size-select"
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </label>
          <label>
            Quantity: 
            <input type="number" min="1" value={Quantity} onChange={handleQuantityChange} className="quantity" />
          </label>
          <p className="price">${product.price}</p>
          <button className="btn-primary">Add to Cart</button>
        </div>
      </div>
    </>
  )
}