import twitter_icon from '../img/Twitter.svg'
import facebook_icon from '../img/Facebook.svg'
import insta_icon from '../img/Instagram.svg'

function Footer() {
    return(
        <footer className="footer">
            <a href="#"><img src={twitter_icon}></img></a>
            <a href="#"><img src={facebook_icon}></img></a>
            <a href="#"><img src={insta_icon}></img></a>
        </footer>
    )
}

export default Footer;