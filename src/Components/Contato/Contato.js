import React from 'react';
import styles from './Contato.module.css';
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp, AiFillInstagram } from 'react-icons/ai';

const contatos = [
  {
    url: "https://www.linkedin.com/in/denisrodrigues-ita/",
    img: <AiFillLinkedin />,
    text: "Vamos fazer um network? me mande uma solicitação no linkedin."
  },
  {
    url: "https://github.com/denisrodrigues-ita",
    img: <AiFillGithub />,
    text: "Meu github, onde você pode conferir todos os meus projetos."
  },
  {
    url: "https://api.whatsapp.com/send?phone=5535984484087&text=Ol%C3%A1%2C%20Denis 😀",
    img: <AiOutlineWhatsApp />,
    text: "Me mande uma mensagem no whatsapp."
  },
  {
    url: "https://www.instagram.com/denisrodrigues.ita/",
    img: <AiFillInstagram />,
    text: "Me siga no instagram @denisrodrigues.ita"
  }
]

const Contato = () => {
  return (
    <section className={`${styles.contato} container`}>
      <div>

        {contatos.map((contato, index) => (
          <div className={styles.content} key={index}>
            <a href={contato.url} target="_blank" rel="noreferrer">
              {contato.img}
              <p>{contato.text}</p>
            </a>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Contato;