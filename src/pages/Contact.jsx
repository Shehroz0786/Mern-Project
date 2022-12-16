import './Contact.css'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Contact() {
    return (
      <>
      <Header/>
      <section className='cont-section'>
      <div className="contact-sect">
        <div className="contact-main">
        <div className="contact-left">
            <div className="contact-text">
                <h1>Contact Us</h1>
                <p className='getintouch'>GET IN TOUCH ANYTIME!</p>
                <p>If you have any query regarding visa consultancy, air ticketing, 
                    travel and tour packages or you want to perform a Hajj or Umrah.
                     feel free to contact us at any time.</p>
            </div>
            <div className="contact-icon">
                <div className="email-div">
                    <div className="email-icon">
                        <span className='span-icon'><AiOutlineMail className='mail'/></span>
                    </div>
                    <div className="email-content">
                        <h5>CONTACT US</h5>
                        <p>info@travelhope.com.pk</p>
                    </div>
                </div>
                <div className="email-div">
                    <div className="email-icon">
                        <span className='span-icon'><AiOutlineMail className='mail'/></span>
                    </div>
                    <div className="email-content">
                        <h5>CONTACT US</h5>
                        <p>info@travelhope.com.pk</p>
                    </div>
                </div>
                <div className="email-div">
                    <div className="email-icon">
                        <span className='span-icon'><AiOutlineMail className='mail'/></span>
                    </div>
                    <div className="email-content">
                        <h5>CONTACT US</h5>
                        <p>info@travelhope.com.pk</p>
                    </div>
                </div>
            </div>
        </div>
            <div className="contact-right">
                <form action="#" className='contact-form'>
                    <input type="text" name='name' placeholder='Name'  className='contact-input'/>
                    <input type="e-mail" name='emai' placeholder='Email Address' className='contact-input'/>
                    <input type="phone" name='phone' placeholder='Phone Number' className='contact-input'/>
                    <textarea name="textarea" id="textarea" cols="55" rows="10" placeholder='Message'></textarea>
                    <a href="#"><button className='contact-btn'>SUBMIT</button></a>
                </form>
            </div>
            
        </div>

        <div className="contact-address">
            <div className="cont-info">
                <h3>Travelhope.pk – Corporate Office</h3>
                <p>Karachi, Pakistan ( Corporate Head Office)</p>
                <p>Plot 330-D, Alamgir Rd, Khokan Society Bahadur Yar Jang CHS,</p>
                <p>Karachi, Karachi City, Sindh 74800</p>
                <p>For any assistance please contact us 24/7 Customer Support Service</p>
                <p><span ><BsTelephone style={{color:'blue'}}/></span>UAN Number <span style={{color:'blue;'}}>(021) 111 172 082</span></p>
                <p><span ><BsTelephone style={{color:'blue'}}/></span>WhatsApp us at <span style={{color:'blue'}}>(021) 115 182 782</span></p>

            </div>
            <div className="cont-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27239.773179295466!2d74.1918157593015!3d31.414907234859026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fe2cfc4d8645%3A0x366027ad60688b9!2sLda%20Avenue%20Phase%201%20Lda%20Avenue%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1670357785051!5m2!1sen!2s" width="100%" height="100%" ></iframe>

            </div>
        </div>
        <div className="contact-address">
            <div className="cont-info">
                <h3>Lahore Garden Town Branch</h3>
                <p>19/A – Ali Block, New Garden Town 2nd Floor of HBL Bank,</p>
                <p>Opposite Barkat Market, Ali Block Garden Town, Lahore, Punjab 54000, Pakistan</p>
                <p>Landmarks: Opposite Barkat Market. Near Total pump on Kalma Chowk.</p>
                <p>Working Hours: 09:00 AM to 05:00 PM ( Monday to Friday)</p>
                <p><span ><BsTelephone style={{color:'blue'}}/></span>WhatsApp us at <span style={{color:'blue'}}>(022) 145 188 782</span></p>

            </div>
            <div className="cont-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1703.49956731228!2d74.37755185!3d31.359003099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919a843a3704c91%3A0xa1af60f850769!2sImmad%20Garden%20Housing%20Scheme%2C%20Kahna%20Purana%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1670377026739!5m2!1sen!2s" width="100%" height="100%" ></iframe>
            </div>
        </div>
      </div>
      </section>
      <Footer/>
      </>
    );
  }
  
  export default Contact;