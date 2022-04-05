const sendLoginToApi = (data) => {
  console.log("Sending data to login:", data);
  return fetch("http://localhost:3000/login", {
    method: "POST",
    //Send email and password by body params
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data; //server response
    });
};

const sendSignUpToApi = () => {
  return fetch('http://localhost:3000/signUp', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Conten-Type": "application/json",
    },
  })
  .then((response) => response.json())
  .then((data) => {
    return data
  })
}

const objToExport = {
  sendLoginToApi: sendLoginToApi,
  sendSignUpToApi :sendSignUpToApi,
};

export default objToExport;
