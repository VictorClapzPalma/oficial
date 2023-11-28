import './header.scss'
import Profile from "../../assets/images/Profile.png"



export default function Header(){
    return(
        <>
        <header class="header">
        <div class="logo">
            <h1>
                Brunch Time Treasure
            </h1>
            <img src={Profile}/>
        </div>
            
    </header>
    </>
    )
}