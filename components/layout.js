import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import { navLinks } from './navigation.js'

const name = 'Your Name';
export const siteTitle = 'Docqeue';

export default function Layout({ children, home }) {
 return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="queueing application" />
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header>
        <nav>
            {navLinks.map((link, index) => {
                return (
                          <ul>
                            <Link href={link.path}>
                                <li key={index}>{link.name}</li>
                            </Link>
                          </ul>
                );
            })}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
