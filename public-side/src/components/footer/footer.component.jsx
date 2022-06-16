import React from 'react'
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './footer.component.css';

function Footer() {
    return (
        // <footer className="footer bg-blue">
        //     <div className="container footer__contact">
        //        <div className="footer__contactPhoneAndMail">
        //            <div className='footer__contactPhone'>
        //                <Link className='footer__link font-weight-bold '>Nurushare Agro</Link><h7 className='bar'> | | </h7>
        //                <Link className='footer__link  font-weight-bold '>+233 24 152 8799</Link>
        //            </div>
        //            <div className="footer__contactMail">
        //                <p className='fonter__link text-white font-weight-bold'>© Nukushare Agro 2021</p>
        //            </div>
        //        </div>
        //    </div>
        //    <div className="container footer__social">
                
        //    </div>
        // </footer>
        <footer className="page-footer font-small indigo bg-blue mt-4">
        
          {/* <!-- Footer Links --> */}
          <div className="container text-center text-md-left">
        
            {/* <!-- Grid row --> */}
            <div className="row">
        
              {/* <!-- Grid column --> */}
              <div className="col mx-auto">
             
                <ul className="list-unstyled">
                <Link className='nav-link font-weight-bold text-white'>Uptech-Agro || +243 823 751 631</Link>
                </ul>
        
              </div>
              {/* <!-- Grid column --> */}
        
              <hr className="clearfix w-100 d-md-none"/>
        
              {/* <!-- Grid column --> */}
              <div className="col">
                <ul className="list-unstyled mt-2 float-right">
                    {/* <!-- Links --> */}
                    <Link className='text-white footer__socialMedioLink'>
                        <FacebookIcon/>
                    </Link>
                    <Link className='text-white footer__socialMedioLink'>
                        <TwitterIcon/>
                    </Link >
                    <Link className='text-white footer__socialMedioLink'>
                        <InstagramIcon/>
                    </Link>
                    <Link className='text-white footer__socialMedioLink'>
                        <YouTubeIcon/>
                    </Link>
                    <Link className=' text-white footer__socialMedioLink'>
                        <LinkedInIcon/>
                    </Link>
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
