import starIcon from "../img/star.png";
//import cardCover from "../img/mountain-bike.png"

function Card(props) {
    let badgeText = '';
    if(props.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if(props.openSpots > 0) {
        badgeText = `AVAIBLE: ${props.openSpots}`
    } else {
        badgeText = '';
    }

    return (
        <div className="card">
            <img src={require('../img/'+props.coverImg)} alt="card cover" />
            {badgeText && <span className="card-badge">{badgeText}</span>}
            <div className="rating">
                <img src={starIcon}  alt="star icon"/>
                <span className="rating-num">{props.stats.rating}</span>
                <span className="rating-votes">({props.stats.reviewCount})</span>
                <span className="location"> &bull; {props.location}</span>
            </div>
            <p className="title">{props.title}</p>
            <p className="price">
                <span className="price-value">From ${props.price} </span>
                 / person
            </p>
            
        </div>
    )
}

export default Card;