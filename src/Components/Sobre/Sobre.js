import React from 'react';
import styles from './Sobre.module.css';
import Fotos from './Fotos';

const Sobre = () => {

  return (
    <>
      <section className={`${styles.sobre} container animaLeft`}>
        <div>

          <div className={styles.gridRow1}>
            <Fotos />
          </div>

          <div className={styles.gridRow2}>
            <h1>Hello World.</h1>
            <p>Meu nome é Denis Rodrigues.</p>
            <p>Comecei a estudar programação no final de 2020, onde tive meu primeiro contato com a linguagem python, fazendo aulas pelo youtube com o professor Gustavo Guanabara, fiquei fascinado com esse mundo e com tudo o que se pode fazer usando a programação.</p>
            <p>No começo de 2022 foquei meus estudos na área de front-end, onde tenho me dedicado diariamente fazendo cursos, buscando materiais, fazendo network e etc.</p>
            <p>Atualmente estou no terceiro semestre de análise e desenvolvimento de sistemas.</p>
            <p>Sou apaixonado por tecnologia e adoro desafios, por isso amo tanto essa área</p>
          </div>
        </div>
      </section >
    </>
  )
}

export default Sobre;