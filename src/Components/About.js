import React from 'react'
import './About.css'
import myphoto from '../static/img/myphoto.jpeg';
import tedlogo from '../static/img/logo_dark.png';
import tridentlogo from '../static/img/tridentlogo.jpeg';
import bgimage1 from '../static/img/bgimage1.png';

export const About = () => {
    return (
        <div className="container">
            <div className="intro">
              
                <div className="content">
                    <h2> I am <span style={{ color: "#00FFF5" }}>Varad </span>Ashtekar </h2>
                    <h3 >Early Education </h3>
                    <div className="edu">
                        <p className="degree"> Bachelor of Technology (B.Tech), Electronics and Telecommunication Engineering</p>
                        <p className="institute">Vishwakarma Institute of Technology, Pune</p>
                        <p className="year">2019 - 2023 </p>
                    </div>
                    <div className="edu">
                        <p className="degree">Senior Secondary (12th), Science </p>
                        <p className="institute">Chate Jr. College, Kolhapur (HSC)</p>
                        <p className="year">2019 </p>
                    </div>
                    <div className="edu">
                        <p className="degree"> Secondary (10th) </p>
                        <p className="institute">Kolhapur Public School, Kolhapur (CBSE)</p>
                        <p className="year">2017</p>
                    </div>

                </div>
                <div className="photo">
                    <img src={myphoto} width={600} />
                </div>
            </div>
            <div class="skillsetbox">
            <img src={bgimage1} />
            <h2> Skills </h2>
            <div class="skills">
                
                <div className="skillsetsec">
                <div className="skill">
                    <p> Full-Stack Web Development</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>

                <div className="skill">
                    <p>Graphic Designing</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>

                <div className="skill">
                    <p>Computer Vision </p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                </div>


                <div className="skillsetsec">
                <div className="skill">
                    <p> Content Writing </p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>

                <div className="skill">
                    <p>Deep Learning </p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>

                <div className="skill">
                    <p>Python Programming </p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="positions">
                <h2> Positions of Responsibility</h2>
                <div className="responsibilities">
                    <div class="card mb-3" style={{ maxWidth: "540px"}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={tridentlogo} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Trident Labs</h5>
                                    <p class="card-text" style={{ color:"#000000"}}>Ground Station , SATLAB</p>
                                    <p class="card-text" style={{ color:"#000000"}}>SATLAB is a student satellite program by Trident Labs <br />
                                                                                    Ground Station Team's basic job is to facilitate communication between satellite situated in the orbit and ground station.<br/> 
                                                                                    Processing on the data transferred by payload. <br />
                                                                                    Tracking position of satellite in the orbit <br/></p>

                                    <p class="card-text"><small class="text-muted">Joined on : 20th June 2021</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                

                    <div class="card mb-3" style={{ maxWidth: "540px"}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={tedlogo}class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">TEDxVITPune</h5>
                                    <p class="card-text" style={{ color:"#000000"}}>Website Head</p>
                                    <p class="card-text" style={{ color:"#000000"}}>Developing website as per UI Design <br />
                                                                                    Maintaining the website <br />
                                                                                    Design for newsletter</p>

                                    <p class="card-text"><small class="text-muted">Joined on : 20th October 2020</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hobbies"></div>
        </div>
    )
}
