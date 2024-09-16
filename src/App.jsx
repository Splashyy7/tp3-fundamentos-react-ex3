import './App.css'
import React, { useState } from 'react';

export default function App() {

  return (

    <div className='outer-container'>
      <header className='header'>
        Cabeçalho
      </header>

      <div className='main-container'>
        <div className='content-container'>
          <section className='main-content'>
            Área de conteúdo
          </section>
        </div>      
      </div>

      <footer className='footer'>
        Rodapé
      </footer>      

    </div>

      );
}

