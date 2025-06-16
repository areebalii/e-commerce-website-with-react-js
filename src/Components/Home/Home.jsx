import { useContext } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../../Product context/ProductContext";
import { Product } from "../product/Product";

export const Home = () => {
  const { loading, products } = useContext(ProductContext);
  // console.log(products);
  let featured = products.slice(0, 4)

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Customized Printed Teese</h1>
          <p>Your one-stop shop for the latest and greatest products.</p>
          <NavLink to="/products">
            <button className="btn-primary">
              Shop Now
            </button>
          </NavLink>
        </div>
        <div className="hero-image">
          <img src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2020/02/boy-t2.png" alt="Shopping" />
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featured.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
      {/* categories */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          {/* Sample categories */}
          <div className="category-card">👕 T-Shirts</div>
          <div className="category-card">📱 Electronics</div>
          <div className="category-card">💼 Bags</div>
          <div className="category-card">⌚ Watches</div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="cta">
        <h2>Don't Miss Out!</h2>
        <p>Subscribe to get updates on the latest deals and new arrivals.</p>
        <NavLink to="/contact" className="btn-primary">Contact Us</NavLink>
      </section>
    </div>
  );
};
