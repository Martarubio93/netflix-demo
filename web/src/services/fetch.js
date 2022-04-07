const callToApi = () => {
  return fetch(`https://api.tvmaze.com/shows`)
    .then((response) => response.json())
    .then((response) => {
      const results = response.map((film) => {
        return {
          id: film.id,
          name: film.name,
          image: film.image.medium,
          summary: film.summary,
          genres: film.genres,
          rating: film.rating.average,
          largeImage: film.image.original

        };
      });
      return results;
    });
};

export default callToApi;
