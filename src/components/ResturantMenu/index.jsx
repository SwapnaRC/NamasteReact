import React, { useEffect } from 'react'

const ResturantMenu = () => {
    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async() => {
        const menu = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9853591&lng=77.7081261&restaurantId=45777&catalog_qa=undefined&submitAction=ENTER")
        const menuJson = await menu.json()
        console.log(menuJson, 'menu list')
        console.log(menuJson?.data?.cards[0]?.card?.card?.info, 'menu list 124')

    }
    
    return(
        <div>Resturant Name
            <ul>
                <li>item 1</li>
                <li>item 1</li>
                <li>item 1</li>
            </ul>
        </div>
    )
}
export default ResturantMenu