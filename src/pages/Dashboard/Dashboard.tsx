import { useContext, useEffect } from "react"
import { UserContext } from "../../Components/UserContext"

export function Dashboard(){
    const userContext =useContext(UserContext)
    console.log(userContext.user)
    //useEffect(()=>{userContext.user},[])
    return(<>
    <h2>Welcome {userContext.user !== null ? userContext.user.displayName : ""}</h2>
    </>)
}