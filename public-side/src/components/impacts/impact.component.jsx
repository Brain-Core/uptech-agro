import React, { useEffect, useState } from 'react'
import './impact.component.css';
import ImpactItem from './impactitem/impactitem.component';
import poverity from '../../assets/property.png'
import zero from '../../assets/zero.png'
import health from '../../assets/health.png'
import axios from 'axios';

function Impact() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/impact')
        .then(res => setData(res.data))
        .catch(err=> console.log(err))
       
    }, []);

    return (
        <div style={{
            marginTop:'100px',
            }} className="ajust" id='impact'>
          <h1 className="title" id='impact' style={{
              marginBottom:'30px'
          }}>Our Impacts</h1> 
          <div className="row" style={{
              textAlign: 'justify',  textJustify: 'inter-word'
          }}>
              {
                data.map((row, index) =>(
                    <ImpactItem
                        img={`${axios.defaults.baseURL}/${row.photo}`}
                        title={row.title}
                        paragraph={row.description}
                        key={index}
                    />
                ))
              }
          </div>
        </div>
    )
}

export default Impact
