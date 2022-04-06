//LocalStorage

// Function to obtain a property from LS
//if this property does not exist because is user first time, the function return defaultValue and we can not to check it in App 
const get = (key, defaultValue) => {
    const localStorageData = localStorage.getItem(key);
    if (localStorageData === null) {
      return defaultValue;
    } else {
      return JSON.parse(localStorageData);
    }
  };
  
  // function to save property in LS 
  const set = (key, value) => {
    const localStorageData = JSON.stringify(value);
    localStorage.setItem(key, localStorageData);
  };
  


  const objectToExport = {
    get: get,
    set: set,

  };
  

  export default objectToExport;