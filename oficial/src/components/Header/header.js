import './header.scss'
import Profile from "../../assets/images/Profile.png"



export default function Header(){
    return(
        <>
        <header class="header">
        <div class="logo">
           <a href="/">
           <h1>
                Brunch Time Treasure
            </h1>
           </a>
          
            <a href="/registrar" >
            <img src={Profile}/>
            </a>
        </div>
            
    </header>
    </>
    )
}