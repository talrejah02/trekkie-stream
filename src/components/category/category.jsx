import React from "react";
import Categorycard from "./categoryCard";
import "./category.css";
import { useCategory} from "../../context";

function Category() {
  const { categoryList } = useCategory();
 

  return (
    <div className="category-container">
      <section className="container-header">
        <span className="header-one">Featured Category</span>
      </section>
      <section className="container-items">
        {categoryList.map((category) => (
          <Categorycard key={category._id} category={category}  />
        ))}
      </section>
    </div>
  );
}

export { Category };
