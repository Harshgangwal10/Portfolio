import styles from './HeaderStyles.module.css';

function Header() {
  return (
   <section id='header' className={styles.container}>
    <Header className={styles.header}>
      <a href="#" className={styles.logo}>Harsh</a>
      <nav className={styles.navbar}>
        <a href="#" className='active'>Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Skill</a>
        <a href="#">Contact</a>
      </nav>
    </Header>
   </section>
  )
}

export default Header
