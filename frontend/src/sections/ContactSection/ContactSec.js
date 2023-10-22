import React from 'react'
import "./contact.css"

export default function ContactSec() {
  return (
    <>
    <div className='contact-section'>
    <div className="contact-title">Let's Connect</div>
    <form className='form'>
    <div className="name">
    <label htmlFor="name" className="form-label">Name</label><br/>
    <input type="text" className="input" required />
    </div><br/>
    <div className="email">
    <label htmlFor="email" className="form-label">Email</label><br/>
    <input type="email" className="input" required />
    </div><br/>
    <div className="phone-nummber">
    <label htmlFor="Phone Number" className="form-label">Phone No.</label><br/>
    <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="input" required />
    </div><br/>
    <div className="message">
    <label htmlFor="message" className="form-label">Message</label><br/>
    <textarea className="input" required />
    </div><br/>
    <button class="btn btn-light rounded-0" type="submit">Submit form</button>
    </form>
    </div></>
  )
}
