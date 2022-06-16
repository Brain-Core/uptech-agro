import React,{ useEffect} from 'react'
import { withRouter } from 'react-router-dom';

function Admin() {

    useEffect(()=>{
        window.location.href = 'https://uptech-admin.herokuapp.com/'; 
       
    })
    return (
        <div>
            
        </div>
    )
}

export default withRouter(Admin)
