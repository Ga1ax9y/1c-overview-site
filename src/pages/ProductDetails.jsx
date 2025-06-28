import { useParams } from "react-router-dom";
import products from "../data/products.json";


const ProductDetails = () => {
    const {id} = useParams();
    const product = products.find(product => product.id == id)

    if (!product) {
    return <h2>Продукт не найден</h2>;
  }

    return (
        <div className="product-details container">
            <img className="product-details__img" src={product.imageUrl} alt={product.title} />
            <h2 className="product-details__title">{product.title}</h2>
            <p className="product-details__category">{product.category}</p>
            <p className="product-details__price">{product.price}</p>
            <p className="product-details__description">{product.description}</p>
        </div>
    )
}

export default ProductDetails
