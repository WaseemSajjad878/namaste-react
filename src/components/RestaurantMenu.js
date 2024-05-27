import { useParams } from "react-router-dom"
import { useRestaurantMenu } from '../utils/useRestaurantMenu'


const RestaurantMenuPage = () => {
    // const [resInfo, setResInfo] = useState(null)

    const {resId} = useParams()

    const resInfo = useRestaurantMenu(resId)

    console.log(resInfo);

    // useEffect(() => {
    //     fetchMenu()
    // }, [])

    // const fetchMenu = async () => {
    //     try {

    //         const res = await fetch(`${API_BASE_URL}/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)

    //         const json = await res.json()
    //         const extractedData = json?.data?.cards?.[2]?.card?.card?.info
    //         setResInfo(extractedData)
    //         console.log('json', json);
    //     }
    //     catch (error) {
    //         console.error('catch error: ', error)
    //     }

    // }

    if(resInfo === null || resInfo === undefined) return <div>Empty</div>
    const {name , cuisines , cloudinaryImageId , costForTwoMessage} = resInfo?.data?.cards?.[2]?.card?.card?.info

    return (
        <div className="menu">
            <h1>
                {name}
            </h1>
            <h3>{costForTwoMessage}</h3>
            <h2>
            Cuisines
            </h2>
            <ul>
                {cuisines?.map((cuisine,index)=> {
                    return (
                        <li key={index}>{cuisine}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default RestaurantMenuPage