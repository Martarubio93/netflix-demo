const callToApi = () => {
  return fetch(`https://api.tvmaze.com/shows`)
    .then((response) => response.json())
    .then((response) => {
      const results = response.map((film, index) => {
        return {
          id: film.id,
          name: film.name,
          image: film.image.medium,
        };
      });
      console.log(results);
      return results;
    });
};

export default callToApi;
