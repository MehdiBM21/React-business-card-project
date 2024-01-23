import womanImage from '../assets/woman-picture.png';
import emailIcon from '../assets/mail.svg';
import linkedinIcon from '../assets/linkedin.svg';
import facebook from '../assets/Facebook.svg';
import twitter from '../assets/Twitter.svg';
import github from '../assets/GitHub.svg';
import instagram from '../assets/Instagram.svg';
export default function Card(){
    return(
        <div className="card-container">
            <img src={womanImage} className='woman-image'/>
            <h2 className='name'>Laura Smith</h2>
            <p className='title'>Frontend Developer</p>
            <p className='website'>laurasmith.website</p>
            <div className='button-container'>
                <button className='btn email-btn'><img src={emailIcon} className='email-icon'/>Email</button>
                <button className='btn linkedin-btn'><img src={linkedinIcon} className='linkedin-icon'/>Linkedin</button>
            </div>
            <div className='content'>
                <h2 className='content-title'>About</h2>
                <p className='text'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h2 className='content-title'>Interests</h2>
                <p className='text'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
            <footer className='footer'>
                <img src={twitter} />
                <img src={facebook} />
                <img src={instagram} />
                <img src={github} />
            </footer>
        </div>
    )
}