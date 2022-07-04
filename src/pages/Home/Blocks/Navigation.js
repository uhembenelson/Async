import React from 'react'

const Navigation = () => {
  return (
    <>
    <div className="container">
    {/* mobile-screen navigation */}
    <nav class="uk-navbar uk-hidden@m" uk-navbar>
      <div class="uk-navbar-left">
        <ul  class="uk-navbar-nav ">
        <li class=""><a href="/">
          logo
          </a>
        </li>

        </ul>
      </div>

      <div class="uk-navbar-right">
        <ul  class="uk-navbar-nav ">
        <li class="">
        <a uk-toggle="target: #offcanvas-nav-primary" href="#/">
          <span uk-icon="menu"></span>
        </a>
        </li>
        </ul>

        <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
        <div class="uk-offcanvas-bar uk-flex uk-flex-column">

        <ul class="uk-nav uk-nav-default uk-nav-center uk-margin-large-top">
          <li class=""><a href="/">
          async
          </a>
          </li>
          <li class="uk-active uk-margin-large-top"><a href="#/">Features</a></li>
          <li class="uk-margin-medium-top"><a href="#/">Technologies</a></li>
          <li class="uk-margin-medium-top"><a href="#/">FAQ</a></li>
          <button style={{height: 50,  borderRadius: 5, width: 180}} class="uk-button uk-button-secondary uk-margin-medium-top">Download App</button> 
        </ul>
        </div>
        </div>
      </div>
    </nav>
    {/* end of mobile-screen navigation */}

    {/* large-screen navigation  */}
    <nav className="uk-visible@m" uk-navbar>
      <div className="row uk-margin-top">
        <div className="col-6 uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="#/">async</a></li>
          </ul>
        </div>

        <div className="col-6 uk-navbar-right">
          <ul class="uk-navbar-nav" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <li class="uk-active"><a href="#/">Product</a></li>
            <li><a href="#/">Features</a></li>
            <li><a href="#/">Technologies</a></li>
            <li><a href="#/">FAQ</a></li>
            <button style={{height: 50,  borderRadius: 5, width: 180}} class="uk-button  uk-button-secondary">Download App</button>
          </ul>
        </div>
      </div>
   </nav>

    </div>
    </>

  )
}

export default Navigation;