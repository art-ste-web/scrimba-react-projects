import photo from '../img/sir-alex.png'
import email_icon from '../img/email-icon.svg'
import linkedin_icon from '../img/linkedin-icon.svg'

function Info() {
    return(
        <div className="info">
            <img className='info_photo' src={photo} alt="photo" />
            <h1 className='info__name'>Sir Alex Ferguson</h1>
            <p className='info__position'>Manchester United Manager 1986-2013</p>
            <a className='info__link' href='https://www.premierleague.com/managers/344/Alex-Ferguson/overview'>premierleague.com</a>
            <div className='info__buttons'>
                <button>
                    <img src={email_icon} />
                    Email
                </button>
                <button className='info__linkedin-btn'>
                <img src={linkedin_icon} />
                    LinkedIn
                </button>
            </div>
        </div>
    )
}

export default Info;