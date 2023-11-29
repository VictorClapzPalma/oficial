import React from 'react';
import './footer.scss';


export default function Footer ()  {
  return (
    <>
    <footer className="site-footer">
    <div className="footer-content">
      <div className="footer-section">
        <h3>Contato</h3>
        <p>Email: contato@brunch.com</p>
        <p>Telefone: (123) 456-7890</p>
        <a className='sobre' href="/sobre">Brunch-Time-Treasure: Sobre</a>
      </div>
      <div className="footer-section">
        <h3>Redes Sociais</h3>
        <ul>
        <li><a>Facebook</a></li>
          <li><a>Twitter</a></li>
          <li><a>Intagram</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Localização</h3>
        <p>Endereço: Av. Hat House, 123 </p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2023 Brunch-Time-Treasure</p>
    </div>
  </footer>
  </>
  );
};

