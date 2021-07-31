import './App.css';
import Navbar from './Components/Navbar';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from './Components/About';
import { Services } from './Components/Services';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import gd from './static/img/18695.png';
import website from './static/img/website.png';
import ui from './static/img/ui.png';
import upwork from './static/img/upwork.png';
import fiverr from './static/img/fiverr.png';
import dribble from './static/img/Dribbble.png';
import github from './static/img/github.png';
import angellist from './static/img/angellist.png';
import behance from './static/img/behance.png';
import banner from './static/img/banner1.png';
import yt from './static/img/pani-puri_thumbnail.png';
import smposts from "./static/img/tanmay'spodcast.png";
import illust from './static/img/Butterflyfinal2.png';
import logodes from './static/img/upyo_logo1.png';
function App() {

  const myservices = {webdev:["Ecom websites", "Portfolio websites", "Business website", "Restraunt Website"],
                      graphic:[[logodes,"Logo Design"],[yt,"YouTube Thumbnails"],[illust,"Illustrations"], [smposts,"Social Media posts"], "Flyer", "Infographics", "Campaign posters", "Banners","Stories"], 
                      uiux:["Ecom websites", "Portfolio websites", "Business website", "Restraunt Website"]};
  return (
    <>

      <Router>
        <Navbar />
        <Switch>

        <Route exact path="./" render={()=>{
            return (
              <>
                  <div class="banner" style={{
          backgroundImage: 'url('+banner+')',
          backgroundSize: "cover",
          width: "100%"
         }}>
           <div className="description">
            <h2>Hi, I'm <span style={{ color : "#00FFF5"}}>Varad</span> Ashtekar </h2>
            <p>I work as a freelancer in Fullstack Web-Development and Graphic Designing I can provide an unique identity to your brand with my creative mindset.<br/> I assure that I’ll deliver an excellent service. </p>
            <button className="btn calltoact"> ORDER NOW !</button>
          </div>
      </div>
      <div className="container">
        <div class="services">
          <h2> Services offered</h2>
          <div className="grp">
            <div className="card" style={{width: "23rem" }}>
            <div className="card-body">
            <a href="/services"><img src={gd} alt="gd" className="card-img-top" height={400} width={400} /></a>
              
                <h3 className="card-text">Graphic Design</h3>
              </div>
            </div>
          
          
            <div className="card" style={{width: "23rem" }}>
            <div className="card-body">
            <a href="/services"><img src={website} alt="gd" className="card-img-top" height={400} width={400} /></a>
             
                <h3 className="card-text">Website Development</h3>
              </div>
            </div>


         
            <div className="card service" style={{width: "23rem" }}>
            <div className="card-body">
                <a href="/services"><img src={ui} alt="gd" className="card-img-top" height={400} width={400} /></a>
                <h3 className="card-text">UI/UX</h3>
              </div>
            </div>
            </div>
         
        
      </div>
      <div className="platforms">
        <h2>You can find me at </h2>
        <div className="platformname">
          <a  href="https://www.upwork.com/o/profiles/users/~01cd95e896c9d26eab/"><img src={upwork} height={150} width={150} /></a>
          <a href="https://github.com/VaradAshtekar"><img src={github} height={150} width={150} /></a>
          <a href="https://dribbble.com/Varad06"><img src={dribble} height={150} width={150} /></a>

          <a  href="https://www.fiverr.com/varadashtekar?up_rollout=true" ><img src={fiverr} height={150} width={150} /></a>
          <a href="https://angel.co/u/varad-ashtekar" ><img src={angellist} height={150} width={150} /></a>
          <a  href="https://www.behance.net/varadashtekar96"><img src={behance} height={150} width={150}  /></a>
        </div>

      </div>

      
</div>

              </>
            )
          }}>
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services myservices={myservices}/>
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>

      </Router>
    
<Footer />
    </>
          );
}

export default App;
