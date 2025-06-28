import './AdvantagesList.css'

const Advantage = ({advantage}) => {
    return (
        <li className="about__advantages-item">
            <div className='about__advantages-line'>
                <img className="about__advantages-img" src={advantage.imageUrl} alt={advantage.title}/>
                <h3 className="about__advantages-title">{advantage.title}</h3>
            </div>
            <p className="about__advantages-description">{advantage.description}</p>
        </li>
    )
}

const AdvantagesList = ({advantages}) => {
    return (
        <ul className="about__advantages-list">
            {advantages.map( advantage => <Advantage key={advantage.id} advantage={advantage}/>) }
        </ul>
    )
}


export default AdvantagesList
