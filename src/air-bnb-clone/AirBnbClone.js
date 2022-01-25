import './AirBnbClone.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import cardsData from './data';

function AirBnbClone() {
    const cards = cardsData.map(cardItem => {
        return(
            <Card
                key={cardItem.id}
                {...cardItem}
            />
        )
    })
    return(
        <div className="app-container">
            <Header />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
            
        </div>
        
    )
}

export default AirBnbClone;