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
export function Register(){
    const auth =getAuth();
    const [authing,setAuthing] = useState(false);
    const [error, setError] = useState("")
    
    //const {user,setUser} = userContext;
    //userContext.setUser({email:"55",user:""})
    //console.log(userContext.user)
    
    //userContext.user && window.location.replace("./");

    
    
    const registerWithGoogle = async()=> {
       
        setAuthing(true);
        createUserWithEmailAndPassword(auth,userEmail, userPassword).then(response=>{
            console.log(response.user)
            //navigate("/")
            window.location.replace("./dashboard")
        }).catch(error=>{
            console.log(error)
            if(error.message=="Firebase: Error (auth/email-already-in-use)."){
              setError("Email-already-in-use")
            }
            
        })
        setAuthing(false)
    }

    

    const[userEmail,setUserEmail] = useState("");
    const[userPassword,setUserPassword] = useState("");
    const[userPasswordCon,setUserPasswordCon] = useState("");
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
              <Form.Control type="password" name="password" value={userPassword} onChange={(e)=>setUserPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group id="password-con">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" name="password" value={userPasswordCon} onChange={(e)=>setUserPasswordCon(e.target.value)}/>
            </Form.Group><br />
            <Button style={{backgroundColor:"#487E6E",border:"none"}} disabled={authing} className="w-100" type="submit" onClick={()=>registerWithGoogle()}>
              Register
            </Button>
            
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/login">Log In</Link>
      </div>
      </div>
    </Container>
    )
}

