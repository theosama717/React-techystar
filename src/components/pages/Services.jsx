import { Carousel } from "react-responsive-carousel"

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import img1 from '../../assets/3.jpg'
import img2 from '../../assets/4.jpg'

const Services = () => {
  return (
    <Carousel infiniteLoop autoPlay showThumbs={false} showArrows={false} interval={1000} showStatus={false} >
      <div>
        <img src={img1} alt="" />
        <p className="legend">FullStack</p>
      </div>
      <div>
        <img src={img2} alt="" />
        <p className="legend">Peer-to-peer support</p>
      </div>
    </Carousel>
  )
}

export default Services