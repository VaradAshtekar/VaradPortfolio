import React from 'react'
import mypic from '../static/img/mypic4.jpeg';
import './About.css'

export const Contact = () => {
    return (
        <div className="container">
              <div className="intro">
                <div className="photo">
                    <img src={mypic} width={600} />
                </div>
                <div className="content">
                    <h2 >You Can Reach Me </h2>
                    <div className="contactdetails">
                       <p><span><i class="fa fa-phone" aria-hidden="true"></i> </span> +91 7387768854</p>
                    </div>
                    <div className="contactdetails">
                       <p><span><i class="fa fa-envelope" aria-hidden="true"></i></span> varadashtekar96@gmail.com</p>
                    </div>
                    <div className="contactdetails">
                       <p><span><i class="fa fa-map-marker" aria-hidden="true"></i> </span> Pune </p>
                    </div>

                </div>
        </div>
        </div>
    )
}
