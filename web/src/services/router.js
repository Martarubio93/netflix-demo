/*
I´ve created this service to manage the routes.
react-router-dom just allow manage routes when the user click a link. If we want to changes the routes we need do it trhough window.location
 https://developer.mozilla.org/es/docs/Web/API/Window/location

*/


const redirect = path => {
    // change the current route
    window.location.replace(`#${path}`);
  };
  

  
  const objToExport = {
    redirect: redirect,
    
  };
  
  export default objToExport;
  