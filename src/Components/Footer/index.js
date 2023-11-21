import React from 'react'
import "./style.css";

const Footer = () => {
  return (
    
   
     <div className='footer-section-main-container'>
        <div className='footer-section-about-sec'>
            <div className='footerSection-title'>ABOUT CARDEKHO</div>
            <ul>
                
                <li>About</li>
                <li>Careers With Us</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Corporate Policies</li>
                <li>Investors</li>
                <li>FAQs</li>
            </ul>
        </div>
        <div className='footer-section-connect-sec'>
        <div className='footerSection-title'>CONNECT WITH US</div>

            <ul>
                <li>Feedback</li>
                <li>Contact Us</li>
                <li>Advertise with Us</li>
               
            </ul>
        </div>
        <div className='footer-section-other-sec'>
        <div className='footerSection-title'>OTHERS</div>

            <ul>                <li>Health Insurance</li>
                <li>Term Insurance</li>
                <li>Life Insurance</li>
                <li>Crack-ED</li>
                <li>Personal loan</li>
                <li>TyreDekho</li>
                <li>BatteryDekho</li>
            </ul>
        </div>
        <div className='footerSection-experience-section'>
         <div className='footerSection-title'>EXPERIENCE CARDEKHO APP</div>
         <div className='footerSection-experience-section-logo'>
            <img src='https://stimg.cardekho.com/pwa/img/appstore.png' alt=''/>
            <img src='https://stimg.cardekho.com/pwa/img/playstore.png' alt=''/>
         </div>
         <div className='footerSection-title'>CARDEKHO GROUP VENTURES</div>
         <div className='footerSection-experience-other-logos'>
            <img src='https://stimg.cardekho.com/pwa/img/footer-BdLogo.svg'/>
            <img src='https://stimg.cardekho.com/pwa/img/footer-rupyyLogo.svg'/>
            <img src='https://stimg.cardekho.com/pwa/img/footer-zwLogo.svg'/>
            <img src='https://stimg.cardekho.com/pwa/img/footer-IdLogo.svg'/>
         </div>
        </div>
        

    </div>
   
  )
}

export default Footer;