import React from 'react';
import whitelogo from '../img/whitelogo.png';
import instagram from '../img/instagram.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';

const Footer = () => {
  return (
    <>
      <div className="uk-margin-large-top bg-black">
        <div className="container">
            <div className="row">

              <div className="col-md-4 text-white uk-text-center uk-hidden@s">
                <img className="uk-margin-top" style={{width: 90}} src={whitelogo} alt="" />
                <div className="body-large uk-margin-top">Life is an opportunity, Capture it, async is a platform that allows you capture your moments and share with others </div>
              </div>
              <div className="col-md-4 text-white uk-text-cente uk-visible@l">
                <img className="uk-margin-top" style={{width: 90}} src={whitelogo} alt="" />
                <div className="body-large uk-margin-top">Life is an opportunity, Capture it, async is a platform that allows you capture your moments and share with others </div>
              </div>

              <div className="col-md-4 text-white uk-text-center">
                <div className="heading-one-small uk-margin-top">Sitemap</div>
                <div className="body-large uk-margin-top">Products</div>
                <div className="body-large uk-margin-top">Features</div>
                <div className="body-large uk-margin-top">Technologies</div>
                <div className="body-large uk-margin-top">FAQ</div>
                <div className="body-large uk-margin-top">Download App</div>
              </div>

              <div className="col-md-4 text-white uk-text-center uk-margin-large-bottom">
                <div className="heading-one-small uk-margin-top">Follow us on</div>
                <div className="uk-margin-large-top">
                  <img style={{width: 30}} src={instagram} alt="" />
                  <img className="uk-margin-left" style={{width: 30}} src={facebook} alt="" />
                  <img className="uk-margin-left" style={{width: 30}} src={linkedin} alt="" />
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer