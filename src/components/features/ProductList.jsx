import { Link } from 'react-router-dom';

function ProductCard({product}) {
    return(
        <li className="products__list-item">
            <img className="product__list-img" src={product.imageUrl} alt={product.title}/>
            <h3 className="products__list-title">{product.title}</h3>
            <p className="products__list-category">{product.category}</p>
            <div className='products__list-footer'>
                <p className="products__list-price">{product.price}</p>
                    <Link to={`/products/${product.id}`}>
                        <button type='button' className="button products__list-btn">Подробнее</button>
                    </Link>
            </div>
        </li>
    )
}
function ProductList({products}){
    return (
        <ul className="products__list">
            {products.map(product => <ProductCard key={product.id} product={product}/>)}
        </ul>
    )
}

export default ProductList;
