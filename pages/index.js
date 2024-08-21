import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../lib/storage_helper'

// declare global {
//   interface Window {
//       gtag: (...args: any[]) => void;
//   }
// }


export default function Home() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    console.log("Stored Cookie Consent:", storedCookieConsent);
    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    // if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      const newValue = cookieConsent ? 'granted' : 'denied';
      console.log("Setting cookie consent to:", newValue);
      

     window.gtag('consent', 'update', {
        'analytics_storage': newValue,
      });

      setLocalStorage("cookie_consent", cookieConsent);
      
      // For Testing
      console.log("Cookie Consent (final):", cookieConsent);
    // } else {
    //   console.log("gtag is not available or window is undefined");
    // }
  }, [cookieConsent]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <div className={`${cookieConsent != null ? "hidden" : "flex"}`}>

        <div className='text-center'>
          <Link href="/info/cookies">
            <p>We use <span className='font-bold text-sky-400'>cookies</span> on our site.</p>
          </Link>
        </div>

        <div className='flex gap-2'>
          <button 
            className='px-5 py-2 text-gray-300 rounded-md border-gray-900' 
            onClick={() => setCookieConsent(false)}>
            Decline
          </button>
          <button 
            className='bg-gray-900 px-5 py-2 text-white rounded-lg' 
            onClick={() => setCookieConsent(true)}>
            Allow Cookies
          </button>
        </div>   
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
