import React from 'react';
import victoryhand from '../img/victoryhand.png';
import handshake from '../img/handshake.png';
import wavinghand from '../img/wavinghand.png';

const Features = () => {
  return (
    <>
    <div className="container uk-margin-medium-top">
      <div className="uk-text-center">
        <div className="body-large subtext-color">CONNECT WITH FRIENDS</div>
        <div className="heading-one-small uk-margin-top">Product Features</div>
      </div>

      <div className="row uk-text-center uk-margin-top">
        <div className="col-md-4">
          <img style={{width: 100}} src={victoryhand} alt="" />
          <div className="heading-two uk-margin-top">Find Your Pictures with One Click</div>
          <div className="body-large subtext-color">Find pictures of you fast and smoothly</div>
        </div>

        <div className="col-md-4">
          <img style={{width: 100}} src={handshake} alt="" />
          <div className="heading-two uk-margin-top">Share pictures with friends and family</div>
          <div className="body-large subtext-color">Share your happy memories with your loved ones effortlessly</div>
        </div>

        <div className="col-md-4">
          <img style={{width: 100}} src={wavinghand} alt="" />
          <div className="heading-two uk-margin-top">Get notified when a picture of you is posted</div>
          <div className="body-large subtext-color">Never go unnoticed, we will track a picture of and and send you a hi 5</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Features