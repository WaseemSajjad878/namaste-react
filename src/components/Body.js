import RestaurantCard from "./RestaurantCard"

import data from '../utils/mockData'
import { useEffect, useState } from "react"


// setData = ()=> {
//     reactiveData?.filter(item=> item.rating > 4)
// }

const Body = () => {
    // Local State Variable - Super power
    const [restaurantsData, setListOfRestaurants] = useState(data)

    // useEffect(()=> {
    //     // restaurantsData = data
    //     setListOfRestaurants(data)
    //     console.log("asjjhasdjhas");
    // }, [])

    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            {/* {restaurantsData} */}
            <div className="filter">
                <button onClick={()=> {
                 const filteredData = restaurantsData?.filter(item=> item.rating > 4)
                 setListOfRestaurants(filteredData)   
                }} className="filter-btn">
                    Top Rated Retaurants
                </button>
            </div>
            <div className="res-container">
                {restaurantsData?.map((item, index) => {
                    return <RestaurantCard resData={item} key={index} />
                })}
            </div>
        </div>
    )
}

export default Body