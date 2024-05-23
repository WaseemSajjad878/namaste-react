import {CLOUD_IMG_URL} from '../utils/constants'
import { Link } from 'react-router-dom'


const RestaurantCard = ({ resData }) => {
    const { name, cuisines , avgRating , costForTwo, cloudinaryImageId, sla , id   } = resData?.info
    return (
        <Link to={`restaurants/${id}`} className="res-card">
            <img src={`${CLOUD_IMG_URL}${cloudinaryImageId}`} alt="" />
            <h3>
                {name}
            </h3>
            <h4>
                {cuisines?.join(',')}
            </h4>
            <h4>
                {avgRating} stars
            </h4>
            <h4>
                {costForTwo}
            </h4>
            <h4>
                {sla?.slaString}
            </h4>
        </Link>
    )
}


export default RestaurantCard