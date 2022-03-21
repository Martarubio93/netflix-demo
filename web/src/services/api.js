const sendLoginToApi = (data) => {
  console.log("Sending data to login:", data);
  return fetch("http://localhost:4000/login", {
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



const objToExport = {
  sendLoginToApi: sendLoginToApi,
};

export default objToExport;
