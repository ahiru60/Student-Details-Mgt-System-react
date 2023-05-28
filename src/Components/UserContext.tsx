import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useState,useEffect } from "react";



export type userContextType   ={
    user : User | null,
    setUser: any

}

type UserContextProviderType ={
    children : React.ReactNode
}

export const UserContext = createContext({} as userContextType);

export const UserContextProvider =({children} :UserContextProviderType) =>{
    const [user,setUser] = useState<User| null>(null);
    const auth = getAuth();
    
    useEffect(onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
            setUser(currentUser)
            //console.log(user)
        }
        else{
            
        }
      }),[])

    return <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
}