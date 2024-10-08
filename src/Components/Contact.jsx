/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import yashp from '../Assets/yp3.jpg';
import "../Assets/contact.css";
function Contact(){
    const [name,setName] = useState("");
    const [mail,setMail] = useState("");
    const [sub,setSub] = useState("");
    const [txtarea,setTextarea] = useState("");


    const [nameerr,setNameerr] = useState("");
    const [mailerr,setMailerr] = useState("");
    const [suberr,setSuberr] = useState("");
    const [txterr,settxterr] = useState("");

    function getname(e){
        setName(e.target.value)
    }
    function getmail(e){
        setMail(e.target.value);   

    }
    function getsub(e){
        setSub(e.target.value);
    }
    function gettxt(e){
        setTextarea(e.target.value);
    }

    function valid(){
        if(name===""){
            setNameerr("Name is Required");
        }
        else{
            setNameerr("");
        }
        if(mail === ""){
            setMailerr("Email is Required");
        }
        else{
            setMailerr("");
        }
        if(sub === ""){
            setSuberr("Subject is Reuired");
        }
        else{
            setSuberr("");
        }

        if(txtarea === ""){
            settxterr("Message is Required");
        }
        else{
            settxterr("");
        }
    }
    
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
                    <div className="contact">
                        <h2>Contact</h2>
                        <div className="contact-info">
                            <div className="contact-icons">
                                <div className="icons">
                                    Ahmedabad
                                </div>
                                <div className="icons">
                                    Freelance Available
                                </div>
                                <div className="icons">
                                    +91 7573883279
                                </div>
                                <div className="icons">
                                    yashrajbarad5677@gmail.com
                                </div>
                            </div>
                            <div className="contact-form">
                                <h1>How can i <b> help you?</b></h1>
                                <div className="form">
                                <div className="form-input">
                                <input type="text" name="" id="" placeholder="Full Name" value={name} onChange={getname}/>
                                <span id="name-err">{nameerr}</span>
                                <input type="email" name="" id="" placeholder="Email Address" value={mail} onChange={getmail}/>
                                <span id="mail-err">{mailerr}</span>
                                <input type="text" name="" id="" placeholder="Subject" value={sub} onChange={getsub}/>  
                                <span id="name-err">{suberr}</span>
                                </div>
                                <div style={{"display":"flex","flexDirection":"column"}}>
                                    <textarea name="" id="txtarea" placeholder="Message" value={txtarea} onChange={gettxt}></textarea>
                                    <span style={{"height":"5px","color":"rgb(183, 7, 7)"}}>{txterr}</span>
                                </div>
                                </div>
                                <button className="submit" onClick={valid} type="submit">Send Message</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div> 
        </>
    )
}
export default Contact;