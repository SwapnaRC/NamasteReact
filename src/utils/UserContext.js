import { createContext } from "react"

const  UserContext = createContext({
    LoggedInUserName: "Default user"
}) 

export default UserContext