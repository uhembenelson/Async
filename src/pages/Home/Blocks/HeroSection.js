import React from 'react';
import download from '../img/download.png';
import user from '../img/user.png';
import face from '../img/face.png';
import facee from '../img/facee.png';

const HeroSection = () => {
  return (
    <div className="container uk-margin-top">
      {/* for large screens */}
      <div className="row uk-visible@m">
        <div className="col-md-6">
          <div className="body-large subtext-color">CONNECT WITH FRIENDS</div>
          <div className="display-web">Async! never miss a moment</div>
          <div className="body-large subtext-color">Life is an opportunity, Capture it, async is a platform that allows you capture your moments and share with others</div>

          <div className="uk-margin-large-top" style={{display: "flex", justifyContent: "space-between"}}>
            <div style={{display: "flex", alignItems: "center"}}>
              <div className="uk-margin-right">
                <img style={{width: 20}} src={download} alt="" />
              </div>
              
              <div>
                <div className="caption-large subtext-color">TOTAL DOWNLOAD</div>
                <div className="heading-two">1,201,234</div>
              </div>
            </div>

            <div style={{display: "flex", alignItems: "center"}}>
              <div className="uk-margin-right">
                <img style={{width: 20}} src={user} alt="" />
              </div>
                
              <div>
                <div className="caption-large subtext-color">TOTAL USERS</div>
                <div className="heading-two">1,001,234</div>
              </div>
              </div>
           </div>
        </div>
        
        <div className="col-md-6 uk-text-center">
          <img style={{width: 360,}} src={face} alt="" />
        </div>
      </div>

      {/* for mobile screens */}
      <div className="row uk-hidden@m">
        <div className="col-md-6 uk-text-center ">
          <img className="img-fluid" src={facee} alt="" />
        </div>
        
        <div className="col-md-6 uk-margin-top">
          <div className="body-small subtext-color">CONNECT WITH FRIENDS</div>
          <div className="display-mobile">Async! never miss a moment</div>
          <div className="body-small subtext-color">Life is an opportunity, Capture it, async is a platform that allows you capture your moments and share with others</div>

          <div className="uk-margin-large-top uk-text-center" style={{display: "flex", justifyContent: "space-between"}}>
            
            <div style={{display: "flex", alignItems: "center"}}>
              <div className="uk-margin-right">
                <img style={{width: 18}} src={download} alt="" />
              </div>
              
              <div>
                <div className="caption-small subtext-color">TOTAL DOWNLOAD</div>
                <div className="body-large">1,201,234</div>
              </div>
            </div>

            <div style={{display: "flex", alignItems: "center"}}>
              <div className="uk-margin-right">
                <img style={{width: 18}} src={user} alt="" />
              </div>
                
              <div>
                <div className="caption-small subtext-color">TOTAL USERS</div>
                <div className="body-large">1,001,234</div>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default HeroSection