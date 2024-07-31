import styles from '../styles/Footer.module.css'


const Footer = () => {
  return (
    <footer>
        <div>
            <h2>TechyStar</h2>
            <p>&copy; all rights reserved</p>
        </div>

        <div>
            <p className={styles.follow}>Follow Us</p>
            <div className={styles.links}>
            <a href="">Instagram</a>
            <a href="">Facebook</a>
            <a href="">Youtube</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer