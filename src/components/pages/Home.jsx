import styles from '../../styles/Home.module.css'

import vg from '../../assets/2.webp'

import { AiFillAmazonCircle, AiFillGoogleCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'

const Home = () => {
  return (
    <main>
      <section className={styles.home1} id="home">
        <div>
          <h1>TECHYSTAR</h1>
          <p>SOLUTION TO ALL YOUR PROBLEMS.</p>
        </div>
      </section>



      <section className={styles.home2}>
        <img src={vg} alt="" />
        <div>
          <p>Lorem Reprehenderit aut sit autem nam tenetur voluptates earum maxime, rerum unde veniam fugit modi voluptatem commodi natus iusto, ducimus dolor. Sequi, quo numquam! Maxime.</p>
        </div>
      </section>


      <section className={styles.home3} id="about">
        <div>
          <div>
          <h1>Who We Are?</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui libero quaerat officia iusto, mollitia voluptate alias similique sint perferendis! Voluptatum, praesentium doloremque tempora ducimus facilis temporibus repudiandae illo consequatur quasi reprehenderit veniam adipisci illum! Maxime similique eos perferendis obcaecati odit odio laborum sed! Quidem magnam quaerat voluptatibus saepe assumenda. Dolorem.</p>
          </div>
        </div>
      </section>


      <section className={styles.home4} id="brands">
        <div>
          <h1>Brands</h1>
          <article>
              <div>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
              </div>
              <div>
                <AiFillGoogleCircle/>
                <p>Google</p>
              </div>
              <div>
                <AiFillYoutube/>
                <p>Youtube</p>
              </div>
              <div>
                <AiFillInstagram/>
                <p>Instagram</p>
              </div>
          </article>
        </div>
      </section>

    </main>
  )
}

export default Home