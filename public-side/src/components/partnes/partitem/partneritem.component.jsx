import React from 'react'
import './partneritem.component.css';

function PartnerItem({img}) {
    return (
        <div className="mt-4">
            
            <img 
            alt="..."
                src={img}
                style={{
                    width: '150px',

            }}className="" />
        </div>

      
    )
}

export default PartnerItem
