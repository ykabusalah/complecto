import React,{useState} from "react";
import { Container, Hidden, Row, Col } from "react-grid-system";
import Header from "./Header";
import Footer from "./footer";
import firebasedb from "../../firebase"; // importing the firebase function from firebase config

import ReactSnackBar from "react-js-snackbar";

function Contact() {



    const [contactdata, setcontactdata] = useState({

     name:"",
     email:"",
     message:""
    
   

    })

    const [notifiy, setnotifiy] = useState({ Show:false,
        message:""})


let valuesonchange=(e)=>{

    setcontactdata({...contactdata,[e.target.name]: e.target.value})
    



}


// Saving the information in firebase db

let saveInfo=(event)=>{

    event.preventDefault();

    if(contactdata.name!=="" && contactdata.email!=="" && contactdata.message!=="")
    {
        
        firebasedb.child("contactus").push(
            contactdata,
             err=>{
                 if(err)
                 {
                     console.log(err);
                 }
                 else{
                    
     
        setnotifiy({message:"Thanks For Connecting With Us", Show: true});
        setcontactdata({

            name:"",
            email:"",
            message:""
           
          
       
           })
         setTimeout(() => {
            setnotifiy({Show: false,message:"" });

         }, 2000);
                 }
               
             },
             
     
     
         )
    }

    else{

        setnotifiy({ Show: true,message:"All Fields Are Required"});
        setTimeout(() => {
            setnotifiy({message:"",Show: false});
        }, 2000);
    }

    
}


    return (
        <>
        <Header />
        <section className="section section-contact section-contact-1">
            <div className="display-spacing">
                <Container>

               {/*<ReactSnackBar Icon={<span>🔥</span>} Show={notifiy.Show}> */} 
               <ReactSnackBar Icon={<span><img src="/assets/images/images/Complecto_transparent-background.png"></img></span>} Show={notifiy.Show}>
         {notifiy.message}
        </ReactSnackBar>
                    <Row>
                        <Hidden xs sm md>
                            <Col lg={5}>
                                <div className="contact-image">
                                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/images/home_coverbg.jpg)` }}></div>
                                </div>
                            </Col>
                        </Hidden>
                        <Col lg={7}>
                            <div className="contact-content">
                                <header className="el-heading">
                                    <h2 className="el-icon">
                                        <span className="el-icon-title">CONTACT ME</span>
                                    </h2>
                                    <h3>
                                        <span>Get in touch with me today.</span>
                                    </h3>
                                    <div className="divider divider-1"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </header>
                                <form className="form form-1 pt-15" onSubmit={saveInfo}>
                                    <Row className="row">
                                        <Col xs={12} sm={12} md={6}>
                                            <div className="form-item">
                                                <input type="text" id="form-item-name" name="name"  value={contactdata.name} onChange={valuesonchange}/>
                                                <label htmlFor="form-item-name" >Your Name</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={6}>
                                            <div className="form-item">
                                                <input type="email" id="form-item-email" value={contactdata.email}  name="email" onChange={valuesonchange}/>
                                                <label htmlFor="form-item-email" >Your Email</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={12}>
                                            <div className="form-item">
                                                <textarea id="form-item-message"  name="message" value={contactdata.message} onChange={valuesonchange}></textarea>
                                                <label htmlFor="form-item-message" >Your Message</label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={12}>
                                            <button className="button button-md button-primary">Send Message</button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
        <Footer />
        </>
    );
}

export default Contact;
