<<<<<<< HEAD
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
=======
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
>>>>>>> 4f78147d15e54d4375df3894fa3a906882cf6dae
}