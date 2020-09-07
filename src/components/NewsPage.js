import React, { useEffect } from 'react'

import './NewsPage.css'
import './flexy.ss.css'

import {Footer} from './footer';
import { News } from './JS/newsApi'

function NewsPage(){

    useEffect(() => {
        News();
    });

    return(
        <div className="newspagecontent">
            <div className="hero-m-n align-center hero">
                <h1 className="news-head"><span id="libertas-span">Libertas</span> News</h1>
                <p className="news-nyt">Powered by the <a href="https://developer.nytimes.com/" id="nyt-link" target="blank">New York Times</a></p>
            </div>
            <div className="news-cards-container">
                <div className="news-card-holder">
                    <div className="card">
                        <h2 id="head0">Loading...</h2>
                        <h3 id="para0">Loading...</h3>
                        <a href="/" target="blank" className="button a-none" id="b0">Read More</a>
                    </div>
                    <div className="card">
                        <h2 id="head1">Loading...</h2>
                        <h3 id="para1">Loading...</h3>
                        <a href="/" target="blank" className="button a-none" id="b1">Read More</a>
                    </div>
                    <div className="card">
                        <h2 id="head2">Loading...</h2>
                        <h3 id="para2">Loading...</h3>
                        <a href="/" target="blank" className="button a-none" id="b2">Read More</a>
                    </div>
                    <div className="card">
                        <h2 id="head3">Loading...</h2>
                        <h3 id="para3">Loading...</h3>
                        <a href="/" target="blank" className="button a-none" id="b3">Read More</a>
                    </div>
                    <div className="card">
                        <h2 id="head4">Loading...</h2>
                        <h3 id="para4">Loading...</h3>
                        <a href="/" target="blank" className="button a-none" id="b4">Read More</a>
                    </div>
                    <div className="card">
                        <h2 id="head5">Loading...</h2>
                        <h3 id="para5">Loading...</h3>
                        <a href="/" target="blank" className="button a-none" id="b5">Read More</a>
                    </div>
                    <div className="card">
                        <h2 id="head6">Loading...</h2>
                        <h3 id="para6">Loading...</h3>
                        <a href="/" target="blank" className="button a-none" id="b6">Read More</a>
                    </div>
                    <div className="card">
                        <h2 id="head7">Loading...</h2>
                        <h3 id="para7">Loading...</h3>
                        <a href="/" target="blank" className="button a-none" id="b7">Read More</a>
                    </div>
                    <div className="card">
                        <h2 id="head8">Loading...</h2>
                        <h3 id="para8">Loading...</h3>
                        <a href="/" target="blank" className="button a-none" id="b8">Read More</a>
                    </div>
                    <div className="card" style={{marginBottom:'50px'}}>
                        <h2 id="head9">Loading...</h2>
                        <h3 id="para9">Loading...</h3>
                        <a href="/" target="blank" className="button a-none" id="b9">Read More</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default NewsPage;