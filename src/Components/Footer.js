import React from 'react'
import linkedin from '../static/img/linkedin.png';
import instagram from '../static/img/ig.png';
import facebook from '../static/img/facebook.jpg.png';
import twitter from '../static/img/twitter.png'
export const Footer = () => {
    return (
        <div className="container">
       
            <div className="footer">
            <div className="socialmedia">
      <p>Follow me on </p>
      <div className="smmedia">
          <a href="https://www.linkedin.com/in/varad-ashtekar-7692171b4/"><img src={linkedin} height={30} width={30} /></a>
          <a href="https://www.instagram.com/eren.jeager0607/"><img src={instagram} height={30} width={30} /></a>
          <a href="https://mobile.twitter.com/ashtekar_varad"><img src={twitter} height={30} width={30} /></a>
          <a href="https://www.facebook.com/varad.ashtekar.18/"><img src={facebook} height={30} width={30} /></a>
          
        </div>
      </div>
            <p>All Rights Reserved</p>
            <p>2021 Copyright</p>
        </div>
        </div>
    )
}
