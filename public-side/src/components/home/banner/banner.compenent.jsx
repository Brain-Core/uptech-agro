import React from 'react'
import home1 from '../../../assets/home1.jpg'
// import home2 from '../../../assets/home2.jpg'
import home3 from '../../../assets/home3.jpg'

// import BannerItem from './banneritem.component'
import './banner.component.css';


function Banner() {
    return (
      <div className='banner'>
        <div className="content">
          <div className="title">UP-Tech</div>
          <div className="descript">
            <p>
              Umoja Poultry farm technologies is an innovative agricultural technology services company
              that strives to increase the access and use of quality and reasonably priced poultry inputs to
              young entrepreneurs working in poultry farming in the North-kivu province in general
              and in the city of Goma in particular. 
              </p>
              <p>
              The team is developing technologies that allow smallholder farmers to access affordable, 
              quality inputs and other agricultural services in a timely manner. 
              The UP-Tech initiative aims to improve the productivity of small farmers, 
              increase their profit margins to more than 20%, ensure food self-sufficiency 
              in white meat in the region and create value for its customers and consumers.
            </p>
          </div>
        </div>
      </div>
    )
}

export default Banner
