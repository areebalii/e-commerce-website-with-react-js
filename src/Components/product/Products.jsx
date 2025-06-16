import { useContext, useState } from "react";
import { ProductContext } from "../../Product context/ProductContext";
import { Product } from "./Product";
// import "../../App.css";

export const Products = () => {
  const { loading, products } = useContext(ProductContext);
  const [selectCategory, setSelectCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 12;

  const filteredProducts = selectCategory === "All" ? products : products.filter((pro) => (
    pro.category.toLowerCase().includes(selectCategory.toLowerCase()))
  )


  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top when page changes
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <div className="all-products">
        <h2>All Products</h2>
      </div>
      <div className="products-page">
        {/* Left Sidebar: Categories */}
        <aside className="category-sidebar">
          <h3>Categories</h3>
          <ul>
            {["All", "Electronics", "Clothing", "jewelery", "Books"].map((cat) => (
              <li
                key={cat}
                className={selectCategory === cat ? "active-category" : ""}
                onClick={() => {
                  setSelectCategory(cat);
                  setCurrentPage(1); // reset to first page when changing category
                }}
              >
                {cat}
              </li>
            ))}
          </ul>

        </aside>

        {/* Right Content: Products */}
        <section className="products-grid">
          {
            currentProducts.map((product) => (
              <Product product={product} key={product.id}  />
            ))
          }
        </section>
      </div>

      {/* Pagination */}
      <div className="pagination">
        {
          Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx + 1}
              onClick={() => handlePageChange(idx + 1)}
              className={`page-btn ${currentPage === idx + 1 ? "active" : ""}`}
            >
              {idx + 1}
            </button>
          ))}
      </div>
    </>
  );
};
