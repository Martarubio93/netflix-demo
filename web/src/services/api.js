const sendLoginToApi = async (data) => {
    console.log("Se están enviando datos al login:", data);
    const response = await fetch("http://localhost:4000/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data_2 = await response.json();
  return data_2;
  };


  const objToExport = {
    sendLoginToApi: sendLoginToApi,
  };
  
  export default objToExport;
  