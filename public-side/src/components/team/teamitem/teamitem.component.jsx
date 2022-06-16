import React from 'react'

function TeamItem({img,name,position}) {
    return (
        <div className="col-xs-6 col-md-4 mt-4 text-center team-item">
            <img
            style={{
                width:'50%'
            }}
            className="img-fluid"
             src={img} 
             alt="img_name"/>
            <p className="font-weight-bold mt-2">{name}</p>
            <p className="small mt-0">{position}</p>
        </div>
    )
}

export default TeamItem
