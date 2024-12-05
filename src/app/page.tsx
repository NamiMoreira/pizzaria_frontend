
import styles from './page.module.scss'
import logoImg from '../../public/logo.svg'
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.ContainerCenter}>
      <Image
      src={logoImg}
      alt="logo da pizzaria"
      />

      <section className={styles.Login}>
        <form>
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

        <Link href="/signup" className={styles.text}>
          Não possui uma conta? Cadastre-se
        </Link>

      </section>
    </div>
  );
}
