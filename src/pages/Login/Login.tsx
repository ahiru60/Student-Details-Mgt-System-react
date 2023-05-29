import Form from "react-bootstrap/esm/Form";
import { FormEvent, useContext, useState} from "react";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Card, Container } from "react-bootstrap";
import { doc, getDoc } from "firebase/firestore";

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
    const [authing,setAuthing] = useState(false);
    const [error, setError] = useState("")
    
    //const {user,setUser} = userContext;
    //userContext.setUser({email:"55",user:""})
    //console.log(userContext.user)
    
    //userContext.user && window.location.replace("./");

    const signInWithGoogleWithPopup = async () =>{
        setError("")
        setAuthing(true);
        signInWithPopup(auth, new GoogleAuthProvider()).then(response=>{
            
            if(response){
            console.log(response.user)
            user.email = response.user.email,
            user.user = response.user.displayName
            window.location.replace("./")
            }
        }).catch(error=>{
            //console.log(error)
            setError("Failed to log in")
        })
        setAuthing(false)
        
    }
    const signInWithGoogleWithEmail = async () =>{
        setError("")
        setAuthing(true);
        signInWithEmailAndPassword(auth,userEmail,userPassword).then(response=>{
            console.log(response.user)
            //navigate("/dashboard/")
            window.location.replace("./")
        }).catch(error=>{
            //console.log(error)
            setError("Failed to log in")
        })
        setAuthing(false)
    }
    const registerWithGoogle = async(userEmail:string, userPassword:string)=> {
       
        setAuthing(true);
        createUserWithEmailAndPassword(auth,userEmail, userPassword).then(response=>{
            console.log(response.user)
            //navigate("/")
        }).catch(error=>{
            console.log(error)
            
        })
        setAuthing(false)
    }

    

    const[userEmail,setUserEmail] = useState("");
    const[userPassword,setUserPassword] = useState("");
    function handleSubmit(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();}
    return( <Container
        className="d-flex align-items-center justify-content-center "
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100 " style={{ maxWidth: "400px" }}>
      <Card style={{
          position:'relative',
          background:'white',
          border: '1px solid black',
          padding:"3%", paddingBottom:"3%",
          marginTop:'4%',
        fontSize:'100%',
          maxWidth:'100%',
          width:"800px",
          height:"auto"
          }} className="shadow-lg p-3 mb-5">
        <Card.Body>
          <h1 className="text-center mb-4">LOGIN</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" value={userPassword} onChange={(e)=>setUserPassword(e.target.value)}/>
            </Form.Group><br />
            <Button style={{backgroundColor:"#487E6E",border:"none"}} disabled={authing} className="w-100" type="submit" onClick={()=>signInWithGoogleWithEmail()}>
              Log In
            </Button><br /><br />
            <button  disabled={authing} className="w-100 btn btn-outline-dark" type="submit" onClick={()=>signInWithGoogleWithPopup()}>
              Sign In with Google
            </button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      </div>
    </Container>
    )
}

