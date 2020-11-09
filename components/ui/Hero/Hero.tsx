import { FC } from 'react'
import Link from 'next/link'
import h from './Hero.module.css'

const Hero: FC = () => {
  return (
    <section className={h.hero}>
      <div className={h.inner}>
      </div>
    </section>
  )
}

export default Hero