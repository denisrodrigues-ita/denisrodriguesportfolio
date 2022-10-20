import React from 'react';
import styles from './Footer.module.css';
import { BsInstagram, BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';

const date = new Date();

const Footer = () => {

  return (
    <footer id='footer' className={`${styles.footer} container`}>
      <div>
        <a href="https://www.instagram.com/denisrodrigues.ita/" target='_blank' rel="noreferrer"><BsInstagram /></a>
        <a href="https://www.linkedin.com/in/denisrodrigues-ita/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/denisrodrigues-ita" target='_blank' rel="noreferrer"><BsGithub /></a>
        <a href="https://wa.me/5535984484087" target='_blank' rel="noreferrer"><BsWhatsapp /></a>
      </div>
      <div>
        <p>copyright© {date.getFullYear()} - Alguns direitos reservados</p>
      </div>
    </footer>
  )
}

export default Footer;