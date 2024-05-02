import Image from "next/image"
import styles from "../styles/branding.module.css"

export default function Branding() {
  return (
    <div className={styles.brandingSection}>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>app/page.js</code>
      </p>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/assets/mxk-logo.svg"
            alt="Maxwell Kirwin Logo"
            className={styles.mxkLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  )
}
