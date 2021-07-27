'use strict';
/*------------------------------------------------------------------------------
1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  const logoImage = document.querySelector('#hplogo_new');
  logoImage.src = `https://www.hackyourfuture.dk/static/logo-dark.svg`;
  logoImage.srcset = `https://www.hackyourfuture.dk/static/logo-dark.svg`;
}
//currently Google has a doodle as logo. I hope that this class is correct.
hijackGoogleLogo();
