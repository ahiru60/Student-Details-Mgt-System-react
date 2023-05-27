import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getFirestore,
    setDoc,
  } from "firebase/firestore";
  import { NavigateFunction } from "react-router-dom";
  // This is tree shaking from firestore
  import { app } from "../Firebase/Firebase";
import { FormData } from "../../pages/Application/Application";
  
  export const firestore = getFirestore(app);
  
  // HOTELS COLLECTION
  export const studentsCollection = collection(firestore, "students");
  
  // ADD A NEW DOCUMENT TO YOUR COLLECTION
  export const addStudent = async (studentData: FormData) => {
    const newStudent = await addDoc(studentsCollection, { ...studentData });
    console.log(`The new student was created at ${newStudent.path}`);
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
  
  