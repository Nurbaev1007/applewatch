import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <nav className='footer__nav'>
                    <div className="footer__follow">
                        <h2 className='footer__title'>Follow Us.</h2>
                        <p className='footer__subtitle'>We are always looking for new <br/> projects and collaborations. <br/>
                            Feel free to contact us.</p>
                        {/*<div className='footer__icons'>*/}
                        {/*    <a href="https://facebook.com" target='_blank'><i className='icon-facebook footer__icon'></i></a>*/}
                        {/*    <a href="https://twitter.com" target='_blank'><i className='icon-twitter footer__icon'></i></a>*/}
                        {/*    <a href="https://instagram.com" target='_blank'><i className='icon-instagram footer__icon'></i></a>*/}
                        {/*</div>*/}
                        <div className='footer__icons'>
                            <a className='footer__icons-link' href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a className='footer__icons-link' href=""><FontAwesomeIcon icon={faTwitter} /></a>
                            <a className='footer__icons-link' href=""> <FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                    </div>

                    <div className="footer__contact">
                        <h2 className='footer__title'>Contact Us.</h2>
                        <address className='footer__subtitle'>One Apple Park Way <br/>
                            Cupertino, CA 95014</address>
                        <p><a className='footer__num' href="tel: (408) 996-1010">(408) 996-1010</a></p>
                        <a className='footer__email' target='_blank' href="https://www.google.com/support@apple.com">support@apple.com</a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;