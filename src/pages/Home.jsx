import AdvantagesList from "../components/features/AdvantagesList";
import advantages from '../data/advantages.json'

const Home = () => {
    return (
        <>
            <h1 className="visually-hidden">О компании «Хьюмен систем»</h1>
            <div className="about container">
                <h2 className="about__title title-medium">Кто мы?</h2>
                <p className="about__text">Компания «Хьюмен систем» работает на рынке информационных услуг с 1997 года, является официальным партнером фирмы «1С» (г. Москва) в статусе «1С:Франчайзи».</p>
                <section className="about__advantages">
                <h2 className="about__title title-medium">Почему выбирают нас?</h2>
                    <AdvantagesList advantages={advantages} />
                </section>
            </div>

        </>
    );
}

export default Home
