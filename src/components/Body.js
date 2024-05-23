import { useEffect, useState } from "react"
import { API_BASE_URL } from '../utils/constants'
import RestaurantCard from "./RestaurantCard"

const Body = () => {
    // Local State Variable - Super power
    const [restaurantsData, setListOfRestaurants] = useState()
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {

            const res = await fetch(`${API_BASE_URL}/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DEKSTOP_WEB_LISTING`)

            const json = await res.json()
            const extractedData = json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
            setListOfRestaurants(extractedData)
            setFilteredRestaurants(extractedData)
            console.log('json', extractedData);
        }
        catch (error) {
            console.error('catch error: ', error)
        }

    }

    console.log("render");

    const filterSearch = (e) => {
        const searhedValue = search?.toLowerCase()
        const filteredData = restaurantsData?.filter(item => item.resName?.toLowerCase().includes(searhedValue))
        setFilteredRestaurants(filteredData)
        console.log('filteredData', restaurantsData, data)
    }


    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" name="" id="" value={search} onChange={(e) => setSearch(e?.target?.value)} />
                    <button onClick={()=> filterSearch()}>
                        Search
                    </button>
                </div>
                <button onClick={() => {
                    const filteredData = restaurantsData?.filter(item => item.rating > 4)
                    setFilteredRestaurants(filteredData)
                }} className="filter-btn">
                    Top Rated Retaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurants?.map((item, index) => {
                    return <RestaurantCard resData={item} key={index} />
                })}
            </div>
        </div>
    )
}

export default Body