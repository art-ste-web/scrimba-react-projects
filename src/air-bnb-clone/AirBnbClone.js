import './AirBnbClone.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';

function AirBnbClone() {
    return(
        <div className="app-container">
            <Header />
            <Hero />
            <Card />
        </div>
        
    )
}

export default AirBnbClone;