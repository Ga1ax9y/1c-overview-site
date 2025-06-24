import ProductCard from "./ProductCard";
import './ProductList.css'
function ProductList({products}){
    return (
        <ul className="products__list container">
            {products.map(product => <ProductCard key={product.id} product={product}/>)}
        </ul>
    )
}

export default ProductList;
