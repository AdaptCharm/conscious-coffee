import { FC } from 'react'
import s from './Story.module.css'

const Story: FC = () => {
  return (
    <section className={s.hero}>
      <div className={s.inner}>
        <div className={s.heading}>
          <h1 className={s.title}>
            Our Story
          </h1>
        </div>
        <div className={s.content}>
          <p className={s.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus arcu felis bibendum ut tristique. Odio eu feugiat pretium nibh ipsum consequat. Magna eget est lorem ipsum dolor sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Porta lorem mollis aliquam ut porttitor. Id porta nibh venenatis cras sed. Enim ut sem viverra aliquet eget sit amet tellus. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Eleifend donec pretium vulputate sapien nec. Pharetra convallis posuere morbi leo. Malesuada fames ac turpis egestas maecenas pharetra convallis. Malesuada fames ac turpis egestas maecenas. Amet tellus cras adipiscing enim eu turpis egestas.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Story