import React from 'react';

import { Link } from 'react-router-dom';
import { scroll } from './JS/scrollTop'

import './footer.css';
import './flexy.ss.css';

export function Footer(){
    return(
        <div className="footer-container">
            <div className="row">
                <div className="column">
                    <h2 className="-left p2 footer-brand">LIBERTAS</h2>
                    <p className="-left footer-brand-p" style={{paddingLeft:'20px', paddingBottom:'20px'}}>A virtual platform made for Global Citizens to voice their concerns regarding the Human Rights.</p>
                </div>
                <div className="column">
                    <h2 className="footer-link-head p2">Links</h2>
                    <ul className="footer-links">
                        <Link className="a-none footer-link" to="/" onClick={scroll()}>Home</Link>
                        <Link className="a-none footer-link" to="/news" onClick={scroll()}>News</Link>
                        <Link className="a-none footer-link" to="/blog" onClick={scroll()}>Blog</Link>
                        <Link className="a-none footer-link" to="/about" style={{paddingBottom:'30px'}} onClick={scroll()}>About</Link>
                    </ul>
                </div>
                <div className="column">
                    <h2 className="footer-contact p2">Contact Us!</h2>
                    <p className="footer-mail" style={{paddingBottom:'15px'}}>Mail: <a href="mailto:info.thelibertas@gmail.com" style={{color:'crimson'}}>info.thelibertas@gmail.com</a></p>
                    <p className="footer-phone">Call us on: <span style={{color:'crimson'}}>+91 8239755000</span></p>
                </div>
            </div>
        </div>
    );
};