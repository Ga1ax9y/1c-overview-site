import ProductList  from "../components/features/ProductList";
import products from '../data/products.json'
import './Products.css'

function Products(){
    return(
        <section className='products'>
          <h1 className='products__title title-big'>Программные продукты 1С</h1>
          <ProductList products={products} />
        </section>
)
}

export default Products
