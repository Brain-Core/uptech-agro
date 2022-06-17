import React, {useEffect, useState} from 'react'
import PartnerItem from './partitem/partneritem.component';
import axios from 'axios';
import './partner.component.css';

function Partner() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        axios.get('https://uptech-admin.herokuapp.com/partners')
        .then(res => setPartners(res.data))
        .catch(err=> console.log(err))
       
    }, [])


    return (
        <div className="patner" id='partner'>
            <h1 className="title">Our Patners</h1>
            <div className="container patner__center">
                <div className="row"> 
                        
                    {partners.map((partner, i)=>(
                        <PartnerItem
                        key={i}
                        img={partner.logo}/>
                    ))}

                </div>
                
            </div>
        </div>
    )
}

export default Partner
