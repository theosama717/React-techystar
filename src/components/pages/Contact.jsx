import styles from '../../styles/Contact.module.css'


const Contact = () => {
  return (
    <main className={styles.main}>
      <div className={styles.innercon }>
        <h1>Contact Us</h1>
        <form action="">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Abc'/>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Abc@gmail.com'/>
          </div>
          <div>
            <label htmlFor="">Message</label>
            <input type="text" placeholder='Tell us about yourself' />
          </div>
        </form>
        <button>Submit</button>
      </div>
    </main>
  )
}

export default Contact