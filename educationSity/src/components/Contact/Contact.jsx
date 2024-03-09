import React from 'react';
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fb5f9f96-ce08-40f0-9dee-f6cf6c214ee1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        console.log("Submitted");
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
}
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msg_icon} alt=''/></h3>
            <p>Fell free to reach out through contact form or find our contact 
            information below. Your feedback, questions, and suggestions are 
            important to us as we strive to provide exceptional service to our 
            university community.</p>
            <ul>
                <li><img src={mail_icon} alt=''/> Contact@university.in</li>
                <li> <img src={phone_icon} alt=''/>+23 678-034-9521</li>
                <li> <img src={location_icon} alt=''/>123 Main Street, Saint Anytown<br/>MA 14582, United States</li>

            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name='mesage' rows='6' placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow} alt/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact