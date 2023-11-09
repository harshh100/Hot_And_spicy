import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="container">
        <form action="https://formsubmit.co/dakshmungalpara4@gmail.com" method="POST">
            <h1>Contact Us</h1>
            <input type="text" className="ipcontact" name="firstname" id="firstName" placeholder="First Name" required/>
            <input type="text" className="ipcontact" name="lastname" id="lastName" placeholder="Last Name" required/>
            <input type="email" className="ipcontact" name="email" id="email" placeholder="Email" required/>
            <input type="text" className="ipcontact" name="mobile.no" id="mobile" placeholder="Mobile" required/>
            <h4 className='contact-tag'>Type Your Message Here...</h4>
            <textarea className="ipcontact" name='massage' required></textarea>
            <input className="ipcontact" type="submit" value="Send" id="button" target='blank'/>
        </form>
    </div> 
    </>
  )
}
