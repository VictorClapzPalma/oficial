<<<<<<< HEAD
import { Link } from "react-router-dom";
import React, { useState } from 'react'
import "./excluir.scss"
import axios from 'axios'
import Header from "../Header/header"
import Right from "../Right/right";


const Excluir = () => {


    const [id, setId] = useState('')
    const [listaProduto, setListaProduto] = useState([])

    async function excluirProduto(produtoId) {
        try {
            const response = await axios.delete(`http://191.235.118.141:5000/produtos/${produtoId}`);

            if (response.status === 200) {
                alert('Produto excluído com sucesso.');
                ListarProdutos();
            } else {
                alert('Falha ao excluir o produto.');
            }
        } catch (error) {
            alert('Ocorreu um erro ao tentar excluir o produto:', error);
        }
    }


    async function ListarProdutos() {
        try {
            let r = await axios.get('http://191.235.118.141:5000/produtos');
            let produtos = r.data;
            setListaProduto(produtos);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    }
    

    return(
        <>
            <Header/>
            <section className="section">
                <div className="left">
                    <h2>REMOVER PRODUTOS</h2>
                    <div className="box">
                    <label for="nome"> ID </label>
                    <input type="number" id="id" name="id" value={id} onChange={e => setId(e.target.value)} />

                    </div>
                    <div class="botao">
                        <button className="button"onClick={() => excluirProduto(id)}>Excluir</button>
                       
                    </div>
                </div>
                
                <Right/>
                    </section>
                    
                </>
    )
}

=======
import { Link } from "react-router-dom";
import React, { useState } from 'react'
import "./excluir.scss"
import axios from 'axios'
import Header from "../Header/header"
import Right from "../Right/right";


const Excluir = () => {


    const [id, setId] = useState('')
    const [listaProduto, setListaProduto] = useState([])

    async function excluirProduto(produtoId) {
        try {
            const response = await axios.delete(`http://191.235.118.141:5000/produtos/${produtoId}`);

            if (response.status === 200) {
                alert('Produto excluído com sucesso.');
                ListarProdutos();
            } else {
                alert('Falha ao excluir o produto.');
            }
        } catch (error) {
            alert('Ocorreu um erro ao tentar excluir o produto:', error);
        }
    }


    async function ListarProdutos() {
        try {
            let r = await axios.get('http://191.235.118.141:5000/produtos');
            let produtos = r.data;
            setListaProduto(produtos);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    }
    

    return(
        <>
            <Header/>
            <section className="section">
                <div className="left">
                    <h2>REMOVER PRODUTOS</h2>
                    <div className="box">
                    <label for="nome"> ID </label>
                    <input type="number" id="id" name="id" value={id} onChange={e => setId(e.target.value)} />

                    </div>
                    <div class="botao">
                        <button className="button"onClick={() => excluirProduto(id)}>Excluir</button>
                       
                    </div>
                </div>
                
                <Right/>
                    </section>
                    
                </>
    )
}

>>>>>>> 4f78147d15e54d4375df3894fa3a906882cf6dae
export default Excluir;