$(document).ready(function() {
  // const currentYear = new Date().getFullYear();
  const copyright = `&copy; ${new Date().getFullYear()}.`;
  document.getElementById('copyright').innerHTML = copyright;

  // G4A
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-Q4PBJF9K2V');
});

// check for saved 'lightSide' in localStorage
let lightSide = localStorage.getItem('lightSide'); 

const darkSideToggle = document.querySelector('#dark-side-toggle');

const enableLightSide = () => {
  // 1. Add the class to the body
  document.body.classList.add('lightside');
  // 2. Update darkSide in localStorage
  localStorage.setItem('lightSide', 'enabled');
}

const disableLightSide = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('lightside');
  // 2. Update lightSide in localStorage 
  localStorage.setItem('lightSide', null);
}
 
// If the user already visited and enabled lightSide
// start things off with it on
if (lightSide === 'enabled') {
  enableLightSide();
}

// When someone clicks the button
darkSideToggle.addEventListener('click', () => {
  // get their lightSide setting
  lightSide = localStorage.getItem('lightSide'); 
  
  // if it not current enabled, enable it
  if (lightSide !== 'enabled') {
    enableLightSide();
  // if it has been enabled, turn it off  
  } else {  
    disableLightSide(); 
  }
});