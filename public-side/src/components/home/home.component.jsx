import React from 'react'
import Banner from './banner/banner.compenent'
import Partner from '../partnes/partner.component';
import './home.component.css';
import 'leaflet/dist/leaflet.css';
import Product from '../product/product.component';
import Impact from '../impacts/impact.component';
import Team from '../team/team.component';
import Contact from '../contact/contact.component';

function Home() {
    return (
        <div className="home" id='home'>
            <Banner/>
            <Product />
            <Impact />
            <Team />
            <Partner/>
            <Contact />
        </div>
    )
}

export default Home
