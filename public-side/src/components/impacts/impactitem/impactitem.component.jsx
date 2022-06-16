import React from 'react'

function ImpactItem({img,title, paragraph}) {
    return (
        <div className="col-md-14 mt-4">
            <div className="row">
                <div className="col-md-2">
                    <img 
                    src={img} 
                    alt=""/>
                </div>
                <div className="col-md-8">
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
