import {collection,deleteDoc,doc,getDoc,getDocs,getFirestore,query,setDoc,where} from "firebase/firestore";
  import { NavigateFunction } from "react-router-dom";
  // This is tree shaking from firestore
  import { app } from "../Firebase/Firebase";
import { FormData } from "../../pages/Application/Application";
import {userContextType } from "../../Components/UserContext"
  
  export const firestore = getFirestore(app);
  
  // HOTELS COLLECTION
  export const studentsCollection = collection(firestore, "students");
  
  // ADD A NEW DOCUMENT TO YOUR COLLECTION
  export const addStudent = async (studentData: FormData,userContext: userContextType,setError:any) => {
    
    const newStudent = await setDoc(doc(studentsCollection,userContext.user?.uid), { ...studentData });
    console.log(`The new student was created at ${newStudent}`);
    setError("success")
    console.log(studentData)
    
  };
  // EDIT A DOCUMENT / DESCRIPTION
  export const updateStudent = async (id: string | undefined, docData: FormData) => {
    const getStudent = doc(firestore, `students/${id}`);
    await setDoc(getStudent, docData, { merge: true });
    console.log("The value has been written to the database");
  };
  // DELETE A DOCUMENT IN YOUR COLLECTION
  export const deleteHotel = async (
    id: string | undefined,
    navigate: NavigateFunction
  ) => {
    const document = doc(firestore, `hotels/${id}`);
    await deleteDoc(document);
    console.log(`The hotel has now been deleted`);
    navigate("/");
  };

  export const getStudent = async (keyWord:string | undefined)=>{
    
      const q = query(
        studentsCollection,
        //  where('owner', '==', currentUserId),
        where('uid', '==', keyWord) // does not need index
        //  where('score', '<=', 100) // needs index  https://firebase.google.com/docs/firestore/query-data/indexing?authuser=1&hl=en
        // orderBy('score', 'asc'), // be aware of limitations: https://firebase.google.com/docs/firestore/query-data/order-limit-data#limitations
        // limit(1)
        
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot
}

export const checkStudent = async (keyWord:any,setStudentDoc:any)=>{
    
  const docRef = doc(firestore, "students", keyWord);
  const docSnap = await getDoc(docRef)
  
  if (docSnap.exists()) {
    console.log("true")
      setStudentDoc({data:docSnap.data()})
      return ({exsist:true})
  } else {
      // docSnap.data() will be undefined in this case
      console.log("false")
      return ({exsist:false})
  }
}
      
  
  