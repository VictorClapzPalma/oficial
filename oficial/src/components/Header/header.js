import './header.scss'
import Profile from "../../assets/images/Profile.png"
import Burguer from "../../assets/svg/burguer.svg"


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
            <a href='/menu'>
            <img className='burg' src={Burguer}/>
            </a>
        </div>
            
    </header>
    </>
    )
}