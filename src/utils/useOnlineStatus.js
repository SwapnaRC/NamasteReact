import { useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true)
    window.addEventListener("offline", ()=> {
        console.log("status is offline")
        setOnlineStatus(false)
    })
    window.addEventListener("online", () => {
        console.log("status is online")
        setOnlineStatus(true)
    })
    return onlineStatus;
}
export default useOnlineStatus