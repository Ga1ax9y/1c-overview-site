import ProductList  from "../components/features/ProductList";
import products from '../data/products.json'

function Products(){
    return(<ProductList products={products} />)
}

export default Products
