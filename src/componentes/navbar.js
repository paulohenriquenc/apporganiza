import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.design.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>

      <div className={styles.logo}>
        <Link href="/">
          <Image 
            src="/images/logo.png" 
            alt="Logo" 
            width={150} 
            height={50} 
          />
          
        </Link>

      </div>
      <ul>

        <li>
          <Link href="/painel">PAINEL PRINCIPAL</Link>
        </li>

        <li>
          <Link href="/receitas">RECEITAS E DESPESAS</Link>
        </li>

        <li>
          <Link href="/orcamento">DEFINIÇÃO DE ORÇAMENTO</Link>
        </li>

        <li>
          <Link href="/investimentos">ACOMPANHAMENTO DE INVESTIMENTOS</Link>
        </li>

        <li>
        <Link href="/index">INDEX</Link>
        </li>

        <li>
        <Link href="/notificacoes">NOTIFICAÇÕES</Link>
        </li>

        <li>
        <Link href="/login">LOGIN</Link>
        </li>

      </ul>
    </nav>
  );
}
