import React from 'react';
import styles from './Portfolio.module.css';
import Curriculo from '../../img/imgPortfolio/curriculo.png';
import FlexBox from '../../img/imgPortfolio/flexbox.png';
import PaginaResponsiva from '../../img/imgPortfolio/paginaresponsiva.png';
import LucasPersonal from '../../img/imgPortfolio/lucaspersonal.png';
import ProjetoFinalUdemy from '../../img/imgPortfolio/projeto-final-curso-udemy.png';
import AnimaisFantasticos from '../../img/imgPortfolio/animaisFantasticos.png';
import Dogs from '../../img/imgPortfolio/dogs.png';
import netCine from '../../img/imgPortfolio/netcine.vercel.app_.png';

const estrutura = [
  {
    url: 'https://denisrodrigues-ita.github.io/Curriculo-Denis/',
    img: Curriculo,
    alt: 'curriculo online',
    description: 'Esse foi meu primeiro projeto onde pude mostrar meus conhecimentos em html, css e github.'
  },
  {
    url: 'https://denisrodrigues-ita.github.io/flexblog/',
    img: FlexBox,
    alt: 'pagina flexbox',
    description: 'Nesse projeto pude mostrar uma página inteiramente responsiva usando flebox.'
  },
  {
    url: 'https://denisrodrigues-ita.github.io/projeto-responsivo/',
    img: PaginaResponsiva,
    alt: 'Página Responsiva',
    description: 'Projeto de página responsiva feita no curso da udemy utilizando flexbox e grid layout.'
  },
  {
    url: 'https://denisrodrigues-ita.github.io/lucas-personal/',
    img: LucasPersonal,
    alt: 'Site do lucas personal',
    description: 'Projeto pessoal feito para meu primo personal trainer usando localização do google maps e video do youtube.'
  },
  {
    url: 'https://projeto-curso-udemy.netlify.app/',
    img: ProjetoFinalUdemy,
    alt: 'Projeto final do curso da udemy',
    description: 'Projeto final do curso da udemy, onde pude mostrar meus conhecimentos em html, css, javascript.'
  },
  {
    url: 'https://denisrodrigues-ita.github.io/animais-fantasticos/',
    img: AnimaisFantasticos,
    alt: 'Projeto de página usando javascript',
    description: 'Projeto de página em html, css e javascript do curso origamid, onde usei manipulações do DOM e requisições via Fetch API.'
  },
  {
    url: 'https://dogs-and-cats.netlify.app/',
    img: Dogs,
    alt: 'Projeto de página usando react',
    description: 'Projeto de página em react do curso origamid, uma rede social de cachorros, onde requisições via fetch API, hooks, react router, lazy loading, entre outros.'
  },
  {
    url: 'https://netcine.vercel.app/',
    img: netCine,
    alt: 'Projeto de página usando react',
    description: 'Projeto pessoal de página em react, onde há requisições via fetch API, hooks, react router, components, entre outros.'
  }
]

const Portfolio = () => {
  return (
    <section className={`${styles.portfolio} container`}>
      <div className={styles.grid}>

        {estrutura.map((item, index) => (
          <div className={styles.a} key={index}>

            <div className={styles.card}>
              <img src={item.img} alt={item.alt} />
            </div>
            <div className={styles.cardP}>
              <p>{item.description}</p>
              <button><a href={item.url} target="_blank" rel="noreferrer">Ver mais.</a></button>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Portfolio;