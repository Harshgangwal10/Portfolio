import { useState } from 'react';
import styles from './HeaderStyles.module.css';
import { FaBars } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";


function Header() {

  const [isOpen,setIsOpen] =useState(false);
  const toggleMenu =()=>{
    setIsOpen(!isOpen);

  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
   <section className={styles.mainnav}>
    <div className={styles.logo}>Harsh<br/> Gangwal</div>

    <div className={`${styles.menulink} ${isOpen ? styles.active : ''}`}>
      <ul>
        <li>
          <a href="#hero" onClick={closeMenu}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>About</a>
        </li>
        <li>
          <a href="#project" onClick={closeMenu}>Project</a>
        </li>
        <li>
          <a href="#skills" onClick={closeMenu}>Skills</a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </li>
      </ul>
    </div>
    <div className={styles.icon} onClick={toggleMenu}><FaBars /></div>
    
   </section>
  );
}

export default Header;
