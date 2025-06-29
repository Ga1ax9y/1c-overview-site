import { useParams } from "react-router-dom";
import products from "../data/products.json";
import './ProductDetails.css'


const ProductDetails = () => {
    const {id} = useParams();
    const product = products.find(product => product.id == id)

    if (!product) {
        return <h1 className="product-details__title error">Продукт не найден</h1>;
  }

    return (
        <>
        <div className="product-details container">
            <h1 className="product-details__title title-big">{product.title}</h1>
            <p className="product-details__category">{product.category}</p>
            <div className="product-details__inner">
                <img className="product-details__img" src={product.imageUrl} alt={product.title} />
                <p className="product-details__description">{product.description}</p>
                <p className="product-details__price title-medium">{product.price}</p>
            </div>
        </div>
            <div className="product-order container">
                <h2 className="product-order__title title-medium">Закажите продукт</h2>
                <p className="product-order__description">
                    Прежде чем купить программу 1с, нужно определиться с необходимым набором функциональных возможностей программного продукта. Мы предлагаем это сделать в рамках проведения бесплатной демонстрации программ 1с. Она может быть проведена как в офисе нашей компании, так и с выездом в офис заказчика. Однако уже несколько лет мы практикуем проведение демонстраций удаленно в формате онлайн при помощи сервиса ZOOM. Этот способ очень востребован у наших заказчиков, так как экономит их время, но при этом позволяет провести полноценную презентацию ПО 1С и ответить на все вопросы. Для заказа демонстрации заполните web-форму «Заказать демонстрацию», которая откроется по клику на соответствующую кнопку. Наши специалисты созвонятся с вами и согласуют удобный день и время.
                </p>
                <h2 className="product-order__title title-medium">Доставка и установка</h2>
                <p className="product-order__description">
                    Поставка ПО производится в электронном виде – вам будут отправлены регистрационные анкеты и пин-коды. Установка 1c программ выполняется после оплаты. Специалист связывается с представителем Заказчика в течение 5-7 рабочих дней после оплаты для согласования даты и времени установки. В процессе выполнения работ по установке потребуется подписание документов уполномоченным представителем Заказчика. В пределах г. Минска и Минского района установка программ 1С производится бесплатно. В регионах установка производится силами представителей компании. В некоторых случаях установка производится дистанционно – для этого от Заказчика необходимо организовать удаленное подключение к серверу.
                </p>
                <h2 className="product-order__title title-medium">
                    Для заказа перейдите на официальный сайт: <a href="https://www.hs.by/" target="_blank">hs.by</a>
                </h2>
            </div>
        </>


    )
}

export default ProductDetails
