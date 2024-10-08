/* eslint-disable jsx-a11y/anchor-is-valid */
import '../Assets/about.css';
import profile from "../Assets/Profile1.jpg";
import Yashp from "../Assets/yp3.jpg";
import ws from "../Assets/w3.png";

import port from "../Assets/port.jpeg"
import food from "../Assets/food.jpeg"
import spotify from "../Assets/spotify.png"
function About(){
    return(
        <>
            <div className="home-intro">
                <div className="home-name">
                    <div className="home-name-intro">
                        
                        <img src={Yashp} alt="" />
                        <div className="names">
                            <h1>Yashraj Barad</h1>
                            <p>Full Stack Developer</p>
                            
                        </div>
                        <button id='cv-btn'>Download CV</button>
                        <p>2020 All Rights are Reserved</p>
                    </div>
                    <div className="about-main">
                        <h1 className='about-main-h'>About &nbsp; <b>Me</b></h1>
                        <div className="about-info">
                            <div className="about-desc">
                                <p>My name is Yashraj Barad, and I am a full stack developer with a degree in BCA from GLS University. I have completed several projects, showcasing my skills and expertise in both front-end and back-end development.</p>
                            </div>
                            <div className="about-personal-desc">
                                <p><b>Age</b> &nbsp; 21</p>
                                <p><b>Residence</b>&nbsp; INDIA</p>
                                <p><b>Email</b>&nbsp; yashrajbarad5677@gmail.com</p>
                                <p><b>Contact</b>&nbsp;     +91 7573883279</p>
                            </div>
                        </div>
                        <div className="about-project">
                            <h1 className='about-project-h'>Projects by &nbsp;<b>Me</b></h1>
                            <div className="project">
                                <div className="project-list">
                                </div>
                                <div className="project-list">
                                    <div className="pro1">
                                    <img src={spotify} alt="" />
                                        <p>Name : <b>Spotify Clone</b></p>
                                        <p>Langugae : <b>React,Tailwind CSS</b></p>
                                        <a href="" target="_blank" rel="noreferrer"><button>Source Code</button></a>
                                    </div>
                                    <div className="pro1">
                                    <img src={port} alt="" />
                                        <p>Name : <b>Personal Portfolio</b></p>
                                        <p>Langugae : <b>HTML,CSS,JS</b></p>
                                        <a href="" target="_blank" rel="noreferrer"><button>Source Code</button></a>
                                    </div>
                                    <div className="pro1">
                                    <img src={food} alt="" />
                                        <p>Name : <b>Food Website</b></p>
                                        <p>Langugae : <b>HTML,CSS,JS</b></p>
                                        <a href="" target="_blank" rel="noreferrer"><button>Source Code</button></a>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div> 
        </>   
    )
}
export default About;