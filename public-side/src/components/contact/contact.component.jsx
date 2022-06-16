import React from 'react'
import './contact.component.css';


function Contact() {
    return (
        <div className="contact bg-light" id='contact'>
            <h1 className="title">Contact Us</h1>
        <div className="">
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
