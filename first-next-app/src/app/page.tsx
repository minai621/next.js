import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6" width={500} height={200} alt="a beautiful english setter"/>
    </main>
)
}
