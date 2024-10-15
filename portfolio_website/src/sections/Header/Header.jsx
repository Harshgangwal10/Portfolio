import { useState } from 'react';
import styles from './HeaderStyles.module.css';
import { FaBars } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";


function Header() {

  const [isOpen,SetIsOpen] =useState(false);
  const toggleMenu =()=>{
    SetIsOpen(!isOpen);

  }
  return (
   <nav className={styles.mainnav}>
    <div className={styles.logo}>Harsh</div>

    <div className={isOpen ?styles.menulink.active:styles. menulink}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Project</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
    {/* <div className={styles.download}><button> Resume <MdOutlineFileDownload />
    </button></div> */}
    <div className={styles.icon} onClick={toggleMenu}><FaBars /></div>
    
   </nav>
  );
}

export default Header;
