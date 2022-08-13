import React from 'react'

function ImpactItem({img,title, paragraph}) {
    return (
        <div className="mt-4 mb-5 pl-3">
            <div className="impact-item">
                <div className="block-img">
                    <img 
                    src={img} 
                    alt="Icon"/>
                </div>
                <div className="block-descript">
                    <h3 className="font-weight-bold">{title}</h3>
                    <p>
                        {paragraph}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ImpactItem
