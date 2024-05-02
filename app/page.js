import dynamic from "next/dynamic"
import styles from "./page.module.css"
import Branding from "./components/Branding"

const Scene = dynamic(() => import("./components/Scene"), { ssr: false })

export default function Home() {
  return (
    <main className={styles.main}>
      <Branding />
      <Scene />
    </main>
  )
}
