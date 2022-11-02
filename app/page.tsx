import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://app.supabase.com">Supabase</a> and{" "}
          <a href="https://nextjs.org">Next.js 13!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>app/page.tsx</code>
        </p>

        <div className={styles.grid}>
          <Link href="/ssr" className={styles.card}>
            <h2>SSR &rarr;</h2>
            <p>Fetch page data on every request.</p>
          </Link>

          <Link href="/static" className={styles.card}>
            <h2>SSG &rarr;</h2>
            <p>Fetch page data at build time.</p>
          </Link>

          <Link href="/static-with-revalidate" className={styles.card}>
            <h2>ISR &rarr;</h2>
            <p>Fetch page data at build time and revalidate.</p>
          </Link>

          <Link href="/client-side" className={styles.card}>
            <h2>useEffect &rarr;</h2>
            <p>Fetch page data client-side with `useEffect`.</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
