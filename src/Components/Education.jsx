/* eslint-disable jsx-a11y/anchor-is-valid */
import yashp from '../Assets/yp3.jpg';
import "../Assets/education.css";
function Education(){
    return(
        <>
            <div className="home-intro">
                <div className="home-name">
                    <div className="home-name-intro">
                        
                        <img src={yashp} alt="" />
                        <div className="names">
                            <h1>Yashraj Barad</h1>
                            <p>Full Stack Developer</p>
                            
                        </div>
                        <button id='cv-btn'>Download CV</button>
                        <p>2020 All Rights are Reserved</p>
                    </div>
                    <div className="education">
                        <h1>My <b>Education</b></h1>

                        <div className="edu-info">
                            <h3>Bachelor of Computer Application</h3>
                            <h4>GLS UNIVERSITY,Ahmedabad</h4>
                            <p>CGPA:6.64</p>
                            <p>2022-2025</p>
                        </div>

                        <div className="edu-info">
                            <h3>12<sup>th</sup> </h3>
                            <h4>G.K Dholkiya,Rajkot</h4>
                            
                            <p>2022</p>
                        </div>

                        <div className="edu-info">
                            <h3>10<sup>th</sup></h3>
                            <h4>New Era School,Rajkot</h4>
                            <p>2020</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Education;