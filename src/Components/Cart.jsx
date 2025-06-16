import { useContext } from "react"
import { ProductContext } from "../Product context/ProductContext"
import "./Cart.css"

export const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(ProductContext);

  return (
    <>
      <div className="cart-contain">
        <h2>Your Shopping Cart</h2>
        {
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>${item.price} x {item.qty}</p>
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={(e) => updateQuantity(item.id, +e.target.value)}
                />
                <button onClick={() => removeFromCart(item.id)}>X</button>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}