import { ReactNode } from "react"

type FormWrapperProps = {
    title: string
    children:ReactNode
}
export function FormWrapper({title,children}:FormWrapperProps){

return <>
<h2 style={{textAlign:'center',margin:'0',marginBottom:'6rem',marginTop:'0',color:"#27443b"}}>{title}</h2>
<div style={{display:'grid',
gap:'1rem .5rem',
justifyContent:'center',
gridTemplateColumns:'auto minmax(auto 100px)'}}>{children}</div>
</>
}