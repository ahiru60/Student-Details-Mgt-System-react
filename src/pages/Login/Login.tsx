import Form from "react-bootstrap/esm/Form";
import { FormEvent, useContext, useState} from "react";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Components/UserContext";

type AuthUser ={
    email:string | null,
    user:string | null
}
const user: AuthUser ={
    email :"",
    user :""
}
export function Login(){
    const auth =getAuth();
    const navigate = useNavigate();
    const [authing,setAuthing] = useState(false);
    const userContext = useContext(UserContext);
    //const {user,setUser} = userContext;
    //userContext.setUser({email:"55",user:""})
    //console.log(userContext.user)

    const signInWithGoogleWithPopup = async () =>{
        setAuthing(true);
        signInWithPopup(auth, new GoogleAuthProvider()).then(response=>{
            
            if(response){
            console.log(response.user)
            user.email = response.user.email,
            user.user = response.user.displayName,
            //userContext.setUser(user);
            navigate("/dashboard")
            }
        }).catch(error=>{
            console.log(error)
            setAuthing(false)
        })
    }
    const signInWithGoogleWithEmail = async () =>{
        setAuthing(true);
        signInWithEmailAndPassword(auth,userEmail,userPassword).then(response=>{
            console.log(response.user)
            navigate("/dashboard")
        }).catch(error=>{
            console.log(error)
            setAuthing(false)
        })
    }
    const registerWithGoogle = async(userEmail:string, userPassword:string)=> {
       
        setAuthing(true);
        createUserWithEmailAndPassword(auth,userEmail, userPassword).then(response=>{
            console.log(response.user)
            //navigate("/")
        }).catch(error=>{
            console.log(error)
            setAuthing(false)
        })
    }
    const[userEmail,setUserEmail] = useState("");
    const[userPassword,setUserPassword] = useState("");
    function handleSubmit(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();}
    return(
        <div style={{display:"grid",
        justifyContent:"center"}}>
        <Form style={{
          position:'relative',
          background:'white',
          border: '1px solid black',
          padding:"3%", paddingBottom:"3%",
          marginTop:'4%',
          borderRadius:'30px', fontSize:'100%',
          maxWidth:'100%',
          width:"800px",
          height:"auto"
          }} onSubmit={(e) => handleSubmit(e)}>
            <h1 className="d-flex justify-content-center">LOGIN</h1><br />
            <Form.Group>
                <Form.Label>
                E-mail:
                </Form.Label>
                <Form.Control type="emal" name="email" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                Password:
                </Form.Label>
                <Form.Control type="password" name="password" value={userPassword} onChange={(e)=>setUserPassword(e.target.value)} required/>
            </Form.Group>
            <Form.Group style={{
            marginTop:'4rem',
            display:'flex',
            gap:".5rem",
            justifyContent:'center',
          }}>
                <button className="btn btn-success"  onClick={()=>signInWithGoogleWithEmail()}>Login</button>
                <button className="btn btn-outline-secondary" onClick={()=>signInWithGoogleWithPopup()} disabled={authing}>Sign in with Google</button>
                <button className="btn btn-outline-dark" onClick={()=>registerWithGoogle(userEmail,userPassword)}>Register</button>
            </Form.Group>
        </Form>
        
        </div>
    )
}
