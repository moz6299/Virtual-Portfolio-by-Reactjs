import React from 'react'
import './Contact.css'
import phot from '../../assets/theme_pattern.svg'
import mail from '../../assets/mail_icon.svg'
import loca_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'



const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e7501faf-854f-45b4-865d-ad36f62e52ca");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        alert("Your Message Sent");
      } else {
        console.log("Error:", data);
        setResult(data.message);
        alert(`Error: ${data.message}`);
      }
    };




  return (
    <div id="contact" className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={phot} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo maiores cum nihil atque amet tempora quae impedit nisi aliquid ex.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail} alt="" /> <p>sico89455@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>+84565613256</p>
                    </div>
                    <div className="contact-detail">
                        <img src={loca_icon} alt="" /> <p>Eg, Lorem, ipsum dolor.</p>
                    </div>
                </div>
            </div>

            <form onSubmit={onSubmit} action="" className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" required placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" required placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
                <button type='submit' className='contact-submit' >Submit Now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
