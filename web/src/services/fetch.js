const callToApi = () => {
  return fetch(`https://api.tvmaze.com/shows`)
    .then((response) => response.json())
    .then((response) => {
      const results = response.map((film) => {
        return {
          id: film.id,
          name: film.name,
          image: film.image.medium,
        };
      });
      return results;
    });
};

export default callToApi;
