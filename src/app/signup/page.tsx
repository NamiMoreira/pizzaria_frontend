import styles from '../page.module.scss'
import logoImg from '../../../public/logo.svg'
import Image from "next/image"
import Link from "next/link"


export default function Signup(){
    return(
        <>
           <div className={styles.ContainerCenter}>
      <Image
      src={logoImg}
      alt="logo da pizzaria"
      />

      <section className={styles.Login}>
        <h1>Crie sua conta</h1>
        <form>

        <input
            type="text"
            required
            name='name'
            placeholder='Digite seu nome...'
            className={styles.input}>
          </input>  

          <input
            type="email"
            required
            name='email'
            placeholder='Digite seu email...'
            className={styles.input}>
          </input>

          <input
            type="password"
            required
            name='password'
            placeholder='**********'
            className={styles.input}>
          </input>
          <button type='submit' className={styles.button}>
            Acessar
          </button>
        </form>

        <Link href="/" className={styles.text}>
          Já possui uma conta? Faça Login
        </Link>

      </section>
    </div>
        </>
    )
}