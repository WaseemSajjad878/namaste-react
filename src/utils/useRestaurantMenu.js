import { useEffect, useState } from "react"
import { API_BASE_URL } from './constants'

export const useRestaurantMenu = (resId)=> {
    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        try {

            const res = await fetch(`${API_BASE_URL}/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)

            const json = await res.json()
            // const extractedData = json?.data?.cards?.[2]?.card?.card?.info 
            setResInfo(json)
            console.log('json', json);
        }
        catch (error) {
            console.error('catch error: ', error)
        }

    }

    return resInfo
}