import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './footer.component.css';

function Footer() {
    return (
        <footer className="page-footer font-small indigo bg-blue mt-4">
        
          {/* <!-- Footer Links --> */}
          <div className="container text-center text-md-left">
        
            {/* <!-- Grid row --> */}
            <div className="row">
        
              {/* <!-- Grid column --> */}
              <div className="col mx-auto">
             
                <ul className="list-unstyled">
                <a className='nav-link font-weight-bold text-white'>Uptech-Agro || +243 823 751 631</a>
                </ul>
        
              </div>
              {/* <!-- Grid column --> */}
        
              <hr className="clearfix w-100 d-md-none"/>
        
              {/* <!-- Grid column --> */}
              <div className="col">
                <ul className="list-unstyled mt-2 float-right">
                    {/* <!-- Links --> */}
                    <a className='text-white footer__socialMedioLink'>
                        <FacebookIcon/>
                    </a>
                    <a className='text-white footer__socialMedioLink'>
                        <TwitterIcon/>
                    </a >
                    <a className='text-white footer__socialMedioLink'>
                        <InstagramIcon/>
                    </a>
                    <a className='text-white footer__socialMedioLink'>
                        <YouTubeIcon/>
                    </a>
                    <a className=' text-white footer__socialMedioLink'>
                        <LinkedInIcon/>
                    </a>
                    </ul>
              </div>
              {/* <!-- Grid column --> */}
        
              <hr className="clearfix w-100 d-md-none"/>
        
            </div>
            {/* <!-- Grid row --> */}
        
          </div>
          {/* <!-- Footer Links --> */}
        
          {/* <!-- Copyright --> */}
          <div className="footer-copyright text-white py-3 container m-auto"> 
          <p className="text-white font-weight-bold container">© Uptech-Agro 2021</p> 
          </div>
          {/* <!-- Copyright --> */}
        
        </footer>
    )
}

export default Footer
