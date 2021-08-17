export const getMovieData = ({ imdbUrl }) => {
    const cleanUrl = (url) => {
        console.log(url);
        const array = url.split("/tt");

        const array2 = array[1].split("/");
        console.log(array2, array2[0]);
        const id = array2[0];

        return id;
    };

    const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
    const movieId = cleanUrl(imdbUrl);
    const url = `${REACT_APP_API_URL}?apikey=${REACT_APP_API_KEY}&i=tt${movieId}`;

    return fetch(url)
        .then((res) => res.json())
        .then((data) => {
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
