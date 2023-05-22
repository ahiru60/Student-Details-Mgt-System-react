import { useState } from "react"

const pages = [
  {name: 'Dashboard', href: '/', current: true},
  {name: 'Application', href: './application' , current: false}
  
]

export default function Header(){
  const[currentPage,setCurrentpage] = useState({})

    return(<><nav className="navbar justify-content-center" style={{backgroundColor:"#487E6E",height:"4.3rem"}} data-bs-theme="dark">
      <ul className="nav justify-content-center">
        {pages.map((page) =>(<li className="nav-item " key={page.name}>
          <a className="nav-link navbar-brand text-light"aria-current="page" href={page.href}>{page.name}</a>
        </li>))}
      </ul></nav>
    </>)
}