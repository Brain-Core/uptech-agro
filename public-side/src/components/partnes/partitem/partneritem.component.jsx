import React from 'react'
import './partneritem.component.css';

function PartnerItem({img}) {
    return (
        // <div className="item">
        //         <img 
        //         src={img}
        //         style={{
        //             width: '100px',

        //     }}className="" />
        //  </div>

        <div className="col-md-2 mt-4">
            
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
