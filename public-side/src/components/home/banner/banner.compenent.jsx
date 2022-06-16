import React from 'react'
import home1 from '../../../assets/home1.jpg'
// import home2 from '../../../assets/home2.jpg'
import home3 from '../../../assets/home3.jpg'

// import BannerItem from './banneritem.component'
import './banner.component.css';


function Banner() {
    return (
      <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={home1}
          className="d-block w-100" alt="..."/>
        </div>
        
        <div class="carousel-item">
          <img src={home3} className="d-block w-100" alt="..."/>
        </div>
        
      </div>
    </div>
    )
}

export default Banner
