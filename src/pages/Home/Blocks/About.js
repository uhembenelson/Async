import React from 'react'
import victoryhand from '../img/victoryhand.png';
import phone from '../img/phone.png';
import girl from '../img/girl.png';


const About = () => {
  return (
      <>
      <div className="container">
        <div className="uk-margin-medium-top uk-text-center">
          <div className="body-large subtext-color">ABOUT US</div>
        </div>

        <div className="row uk-margin-top">
          <div className="col-md-6 uk-text-center">
            <img style={{width: 200, height: 400}} src={phone} alt="" />
            <img className="uk-margin-large-top" style={{width: 200, height: 400, marginLeft: 10}} src={girl} alt="" />
          </div>

          <div className="col-md-6 uk-text-cente">
            <div className="heading-one-small uk-margin-large-top">Amet minim mollit non doserat</div>
            
            <div className="uk-margin-large-top" style={{display: "flex", justifyContent: "", alignItems: "center"}}>
              <img style={{width: 60}} src={victoryhand} alt="" />
              <div className="subtext-color body-large">lorem ipsum dolor ipsum lorem dolor lorem ipsum dolor psum lorem dolor lorem.</div>
            </div>

            <div className="uk-margin-top" style={{display: "flex", justifyContent: "", alignItems: "center"}}>
              <img style={{width: 60}} src={victoryhand} alt="" />
              <div className="subtext-color body-large">lorem ipsum dolor ipsum lorem dolor lorem ipsum dolor.</div>
            </div>

            <div className="uk-margin-top" style={{display: "flex", justifyContent: "", alignItems: "center"}}>
              <img style={{width: 60}} src={victoryhand} alt="" />
              <div className="subtext-color body-large">lorem ipsum dolor ipsum lorem dolor lorem ipsum dolor.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About