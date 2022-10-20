import React from 'react';
import styles from './Home.module.css';
import { IoPersonCircle } from 'react-icons/io5';
import { GiFiles } from 'react-icons/gi';
import { TiContacts } from 'react-icons/ti';

const cliqueSobre = () => {
  window.location.href = '/sobre';
}

const cliquePortfolio = () => {
  window.location.href = '/portfolio';
}

const cliqueContato = () => {
  window.location.href = '/contato';
}

const Home = () => {

  return (
    <section className={`${styles.home} container animaLeft`}>
      <div className={styles.grid1}>
        <div>
          <h1>Sobre</h1>
          <p>Hello world, meu nome é Denis Rodrigues,
            sou desenvolvedor front-end e apaixonado por tecnologia,
            atualmente estou cursando o 3º semestre de análise e desenvolvimento de sistemas...
          </p>
          <button onClick={cliqueSobre}>Clique aqui para ver mais.</button>
        </div>
        <IoPersonCircle />
      </div>

      <div className={styles.grid2}>
        <GiFiles />
        <div>
          <h1>Portfólio</h1>
          <p>Confira aqui alguns de meus projetos feitos
            durante os cursos, e também alguns projetos pessoais,
            que estão em constante evolução.
          </p>
          <button onClick={cliquePortfolio}>Clique aqui para ver mais.</button>
        </div>
      </div>

      <div className={styles.grid3}>
        <div>
          <h1>Contato</h1>
          <p>Veja aqui como entrar em contato comigo, e também conferir minhas principais redes    sociais como LinkedIn e GitHub.
          </p>
          <button onClick={cliqueContato}>Clique aqui para ver mais.</button>
        </div>
        <TiContacts />
      </div>
    </section >
  );
}

export default Home;