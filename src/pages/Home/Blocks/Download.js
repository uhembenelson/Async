import React from 'react';
import boy from '../img/boy.png';
import applebtn from '../img/applebtn.png';
import googlebtn from '../img/googlebtn.png';

const Download = () => {
  return (
    <>
      <div style={{borderRadius: 5}} className="container uk-visible@l uk-margin-large-top bg-yellow">
        <div className="row uk-text-center">

          <div className="col-md-6 uk-text-center">
            <div className="body-large uk-margin-xlarge-top">DOWNLOAD APPLICATION</div>
            <div className="heading-two uk-margin-top">Download async app from Play Store or App Store</div>

            <div className="uk-margin-large-top" style={{display: "flex", alignItems: "center", justifyContent: "space-betwen", marginLeft: 60}}>
              <div><img style={{width: 200, cursor: "pointer"}} src={applebtn} alt="" /></div>
              <div><img style={{width: 200, cursor: "pointer", marginLeft: 40}} src={googlebtn} alt="" /></div>
            </div>
          </div>

          <div className="col-md-6">
            <img src={boy} alt="" />
          </div>
        </div>
      </div>

      {/* mobile screen */}
      <div style={{borderRadius: 5}} className="container uk-hidden@l uk-margin-large-top bg-yellow">
        <div className="row uk-text-center">

          <div className="col-md-6">
            <img className="uk-margin-top"  src={boy} alt="" />
          </div>

          <div className="col uk-text-center uk-margin-large-bottom">
            <div className="body-large uk-margin-large-top">DOWNLOAD APPLICATION</div>
            <div className="heading-two uk-margin-top">Download async app from Play Store or App Store</div>

            <div className="uk-margin-large-top" style={{display: "flex", alignItems: "center", justifyContent: "center", marginLeft: 0}}>
              <div><img style={{width: 150, cursor: "pointer"}} src={applebtn} alt="" /></div>
              <div><img style={{width: 150, cursor: "pointer", marginLeft: 10}} src={googlebtn} alt="" /></div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  )
}

export default Download;