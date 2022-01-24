import imgGrid from '../img/img-grid.png';
function Hero() {
    return(
        <div className='hero'>
            <img src={imgGrid} alt="img grid" />
            <h1>Online Experiences</h1>
            <p>
                Join unique interactive activities led 
                by one-of-a-kind hosts—all without leaving
                home.
            </p>
        </div>

    )
}

export default Hero;