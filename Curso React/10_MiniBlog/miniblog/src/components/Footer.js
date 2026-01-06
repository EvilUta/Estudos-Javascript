import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Projeto pessoal a fim de aprendizado em REACT
      </p>
      <p>
        Mini <span>Blog</span> © {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
