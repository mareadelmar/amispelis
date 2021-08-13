export const getMovieData = ({ imdbUrl }) => {
    const cleanUrl = (url) => {
        console.log(url);
        const array = url.split("/tt");
        console.log(array);

        const array2 = array[1].split("/");
        console.log(array2, array2[0]);
        const id = array2[0];
        console.log(id);

        return id;
    };

    const movieId = cleanUrl(imdbUrl);
    const url = `http://www.omdbapi.com/?apikey=60635615&i=tt${movieId}`;

    return fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

            if (data.Error) {
                console.log(data.Error);
                return data.Error;
            }

            const {
                Title,
                Actors,
                Country,
                Director,
                Language,
                Plot,
                Runtime,
                Poster,
                Year,
                imdbID,
                imdbRating,
            } = data;

            return {
                Title,
                Actors,
                Country,
                Director,
                Language,
                Plot,
                Runtime,
                Poster,
                Year,
                imdbID,
                imdbRating,
            };
        })
        .catch((err) => {
            console.error(err);
        });
};
