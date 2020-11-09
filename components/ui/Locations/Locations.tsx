import { FC } from 'react'
import l from './Locations.module.css'

const Locations: FC = () => {
  return (
    <section className={l.locations}>
      <div className={l.inner}>
        <div className={l.heading}>
          <h1 className={l.title}>
            Our Locations
          </h1>
        </div>
        <div className={l.content}>
          <p className={l.desc}>
            Vivamus arcu felis bibendum ut tristique. Odio eu feugiat pretium nibh ipsum consequat. Magna eget est lorem ipsum dolor sit amet. Tristique senectus et netus et malesuada fames ac turpis egestal.
          </p>
          <p className={l.desc}>
            Porta lorem mollis aliquam ut porttitor. Id porta nibh venenatis cras sed. Enim ut sem viverra aliquet eget sit amet tellul. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Eleifend donec pretium vulputate sapien nec. Pharetra convallis posuere morbi leo.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Locations