import './BuisnessCard.css';
import Info from './components/Info'
import About from './components/About'
import Interersts from './components/Interests'
import Footer from './components/Footer'


function BuisnessCard() {
    return(
        <div className='card-container'>
            <div className='buisness-card'>
                <Info />
                <About />
                <Interersts />
                <Footer />
            </div>
        </div>
    )
}

export default BuisnessCard;
