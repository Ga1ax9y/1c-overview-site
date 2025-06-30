import { useState } from "react";
import ProductList  from "../components/features/ProductList";
import products from '../data/products.json'
import './Products.css'

function Products(){
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = ['Все', ...new Set(products.map(product => product.category))];
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

    return(
        <section className='products container'>
          <h1 className='products__title title-big'>Программные продукты 1С</h1>
          <div className="products__actions">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="select products__select"
              >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Поиск по названию..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input products__input"
            />
          </div>
          <ProductList products={filteredProducts} />
        </section>
)
}

export default Products
