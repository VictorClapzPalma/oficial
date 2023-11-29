import React, { useState } from 'react';
import "../../style/reset.scss";
import "./home.scss";
import Header from "../Header/header";
import kart from "../../assets/svg/carrinho.svg";
import paoComOvo from "../../assets/images/Frame1.png";
import panqueca from  "../../assets/images/panqueca.jpg";
import coffe from "../../assets/images/coffe.jpg";
import PaoComOvoEBacon from "../../assets/images/PaoOvoBacon.png";
import panqueca2 from "../../assets/images/Frame2.png";
import sucoDeLaranja from "../../assets/images/Frame4.png";
import panqueca3 from "../../assets/images/Frame6.png";
import panqueca4 from "../../assets/images/Frame7.png";
import paoComOvo2 from "../../assets/images/Ovo.png";

import Footer from "../Footer/footer"

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCartHandler = (produto) => {
    const existingItem = cartItems.find((item) => item.id === produto.id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === produto.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...produto, quantity: 1 }]);
    }

    // Atualize esta linha para arredondar para cima e exibir apenas duas casas decimais
    setTotal((prevTotal) => parseFloat((prevTotal + produto.price).toFixed(2)));
  };

  const produtos = [
    { id: 1, imgSrc: paoComOvo, alt: 'pao_com_ovo', price: 10.99, name: 'Pão com Ovo' },
    { id: 2, imgSrc: panqueca, alt: 'panqueca', price: 15, name: 'Panqueca Tradicional' },
    { id: 3, imgSrc: coffe, alt: 'cafe', price: 5, name: 'Café' },
    { id: 4, imgSrc: PaoComOvoEBacon, alt: 'pao_com_ovo_bacon', price: 12.99, name: 'Pão com Ovo e Bacon' },
    { id: 5, imgSrc: panqueca2, alt: 'panqueca2', price: 18, name: 'Panqueca Com Mel e Banana' },
    { id: 6, imgSrc: sucoDeLaranja, alt: 'suco_de_laranja', price: 8, name: 'Suco de Laranja' },
    { id: 7, imgSrc: panqueca3, alt: 'panqueca3', price: 20, name: 'Panqueca a Moda do Chef' },
    { id: 8, imgSrc: panqueca4, alt: 'panqueca4', price: 22, name: 'Panqueca Com Frutas Vermelhas' },
    { id: 9, imgSrc: paoComOvo2, alt: 'ovo', price: 14.99, name: 'Pão com Ovo no Pao Italiano' },
  ];

  return (
    <>
      <Header />
      <section className="main-section">
        <div className="produtos">
          {produtos.map((produto) => (
            <div key={produto.id} className="produto">
              <img
                src={produto.imgSrc}
                alt={produto.alt}
                onClick={() => addToCartHandler({ id: produto.id, name: produto.name, price: produto.price })}
              />
              <button onClick={() => addToCartHandler({ id: produto.id, name: produto.name, price: produto.price })}>
                Add 
              </button>
            </div>
          ))}
        </div>
        <div className="carrinho">
          <img src={kart} alt='carrinho' />
          <div className='valor-box'>
            {cartItems.map((item) => (
              <div key={item.id} className='box'>
                <p className ="descricao">{item.name} </p>
                <p>${item.price} x {item.quantity}</p>
              </div>
            ))}
            <a>Total: ${total}</a>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Home;