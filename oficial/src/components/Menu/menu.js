import Header from "../Header/header"
import "./menu.scss"


export default function Menu(){
    return(
        <>
            <Header/>
            <section class="menu">
             <a class="name" href="/registrar">
                    INSERIR/ALTERAR
                </a>
                <a class="name" href="/excluir">
                    REMOVER
                </a>
                <a class="name" href="/listar">
                    LISTAR
                </a>
            </section>
        </>
    )

}