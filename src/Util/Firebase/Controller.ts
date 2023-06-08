import {collection,deleteDoc,doc,getDoc,getDocs,getFirestore,or,query,serverTimestamp,setDoc,where} from "firebase/firestore";
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
    
    const merge ={
      createdDate:serverTimestamp(),
      lastUpdatedDate:"",
      uid:userContext.user?.uid
    }

    const newStudent = await setDoc(doc(studentsCollection,userContext.user?.uid), { ...merge,...studentData });
    console.log(`The new student was created at ${newStudent}`);
    setError("success")
    console.log(studentData)
    
  };

  export const getStudent = async (uid:string|null|undefined)=>{

  if(uid){
  const docRef = doc(firestore, "students", uid);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data().displayname);
     return(docSnap.data())
  } else {
  // docSnap.data() will be undefined in this case
  return null
  console.log("No such document!");
  }}
  }

  // EDIT A DOCUMENT / DESCRIPTION
  export const updateStudent = async (id: string | undefined, docData: FormData) => {
    var now =serverTimestamp()
    const times ={
      lastUpdatedDate:now
    }
    const getStudent = doc(firestore, `students/${id}`);
    await setDoc(getStudent, {...docData,...times}, { merge: true });
    console.log("The value has been written to the database");
    console.log({...times,...docData})
    return {...times,...docData}
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

  export const searchStudents = async (keyWord:string | undefined)=>{
      const keyWords = [keyWord]
      const q = query(
        studentsCollection,
        //  where('owner', '==', currentUserId),
        or(where('displayname', '==', keyWord), 
        where('otherNames', '==', keyWord),
        where('surname', '==', keyWord),
        where('monashId', '==', keyWord),
        where('passportNumber', '==', keyWord),
        where('email', '==', keyWord),
        where('nationality', '==', keyWord),
        )// does not need index
        //  where('score', '<=', 100) // needs index  https://firebase.google.com/docs/firestore/query-data/indexing?authuser=1&hl=en
        // orderBy('score', 'asc'), // be aware of limitations: https://firebase.google.com/docs/firestore/query-data/order-limit-data#limitations
        // limit(1)
        
      );
      const querySnapshot = await getDocs(q)
      return querySnapshot
      
}

export const checkStudentOnFS = async (keyWord:any,setStudentDoc:any)=>{
    
  const docRef = doc(firestore, "students", keyWord);
  const docSnap = await getDoc(docRef)
  
  if (docSnap.exists()) {
    console.log("true")
      setStudentDoc({data:docSnap.data()})
      return (true)
  } else {
      // docSnap.data() will be undefined in this case
      console.log("false")
      return (false)
  }
}
  
export const checkStaff = (uid:string|null|undefined)=>{
  let state
  if(uid){
  const docRef = doc(firestore, "staff", uid);
  const docSnap = getDoc(docRef);
  docSnap.then(async ()=>{
    state = (await docSnap).id
    console.log((await docSnap).id)
    return state
  })
  return state
  } }