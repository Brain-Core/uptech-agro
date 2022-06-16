import React from 'react'
import './contact.component.css';


function Contact() {
    return (
        <div className="col-md-7 m-auto contact" >
            <h1 className="text-center m-4">Contact Us</h1>
        <div className="card card-body m-auto">
            <form className="form">
                <div className="form-group">
                    <input type="text" name="name"  placeholder="FullName" className="form-control rounded"/>
                </div>
                <div className="form-group">
                    <input type="text" name="subject"  placeholder="Subject" className="form-control rounded"/>
                </div>
                <div className="form-group">
                    <input type="email" name="email"  placeholder="Email" className="form-control rounded"/>
                </div>
                <div className="form-group">
                    <textarea name="message" placeholder="Message ...." className="form-control rounded" cols="10" rows="10"></textarea>
                </div>
               
                <button type="submit" className="btn btn-primary bg-white rounded">Send</button>
               
            </form>
        </div>
    </div>
    )
}

export default Contact
