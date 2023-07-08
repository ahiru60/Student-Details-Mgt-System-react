import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useState,useEffect, useRef } from "react";
import { checkStaff } from "../Util/Firebase/Controller";



export type userContextType   ={
    user : User | null,
    setUser: any,
    studentDoc:any
    setStudentDoc:any
    chosedResultData:any,
    setChosedResultData : any
    isStaff : any
}

type UserContextProviderType ={
    children : React.ReactNode
}

export const UserContext = createContext({} as userContextType);


export const UserContextProvider =({children} :UserContextProviderType) =>{
    const [user,setUser] = useState<User| null>(null);
    const auth = getAuth();
    const [studentDoc,setStudentDoc] = useState()
    const [chosedResultData,setChosedResultData] = useState()
    const [isStaff,setIsStaff] = useState('loading')
    
    useEffect(onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
            setUser(currentUser)
            checkStaff(currentUser.uid).then(
                (state)=>{
                    state? setIsStaff('true') : setIsStaff('false')
                }
            )
            
            //console.log(user)
        }
        else{
            
        }
      }),[])

    return <UserContext.Provider value={{user,setUser,studentDoc: studentDoc,setStudentDoc: setStudentDoc,chosedResultData:chosedResultData,setChosedResultData:setChosedResultData,isStaff:isStaff}}>{children}</UserContext.Provider>
}