import marker from '../img/marker.svg';

function Post(props) {
    return(
        <div className="post-card">
            <a href={props.imageUrl}>
                <img src={require('../img/'+props.image)} alt="post cover" />
            </a>
            <div className="post-info">
                <div className="location">
                    <img src={marker} alt="marker-icon" />
                    <span className="country">{props.location}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p className="date">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}

export default Post;