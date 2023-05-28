import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useState,useEffect } from "react";
import { checkStudent } from "../Util/Firebase/Controller";



export type userContextType   ={
    user : User | null,
    setUser: any,
    studentDoc:any
    setStudentDoc:any
}

type UserContextProviderType ={
    children : React.ReactNode
}

export const UserContext = createContext({} as userContextType);


export const UserContextProvider =({children} :UserContextProviderType) =>{
    const [user,setUser] = useState<User| null>(null);
    const auth = getAuth();
    const [studentDoc,setStudentDoc] = useState()
    useEffect(onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
            setUser(currentUser)
            //console.log(user)
        }
        else{
            
        }
      }),[])

    return <UserContext.Provider value={{user,setUser,studentDoc: studentDoc,setStudentDoc: setStudentDoc}}>{children}</UserContext.Provider>
}