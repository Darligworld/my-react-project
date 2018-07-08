import React from 'react';
import aboutUs from './aboutUs';

export default class Footer extends React.Component {
  render() {
    return(
      <div>
       <footer class="text-center">
         <div id="legal">
            <ul class="footer-site-links">
               <button class="btn btn-secondry btn-lg">About us</button>
               <button class="btn btn-secondry btn-lg">FaceBook</button>
               <button class="btn btn-secondry btn-lg">Twitter</button>
               <button class="btn btn-secondry btn-lg">DarlingWorld</button>
               <button class="btn btn-secondry btn-lg">Agro-World</button>
               <button class="btn btn-secondry btn-lg">GitHub</button>
           </ul>
            </div>
           <div>
         <p class="copyright">
           Copyright 2018 <a href="http:www.enye.tech">The DarlingWorld Foundation</a>.
         <a href="http:www.enye.tech">Enye License</a>
        <span class="sponsor-line"><a href='#'>Web hosting by Enye world</a> | <a href="#" rel="nofollow" class="sp-link">Designed by DARLINGTON</a></span>
        </p>
        </div>

       </footer>
      </div>
    );

  }
}
