import axios from "axios";

// ключ API:  738fc38af0ecd7e15ad7e23a832d1068
//токен  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzhmYzM4YWYwZWNkN2UxNWFkN2UyM2E4MzJkMTA2OCIsIm5iZiI6MTcyNzIwNzcxMy4wNzI5ODYsInN1YiI6IjY2ZjMxNmEwMDIyMDhjNjdjODhkYWI0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UwbRPmdNWH2YKugHfa-OEiCIitCi-F6F7sFUk3FS-70

const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzhmYzM4YWYwZWNkN2UxNWFkN2UyM2E4MzJkMTA2OCIsIm5iZiI6MTcyNzIwNzcxMy4wNzI5ODYsInN1YiI6IjY2ZjMxNmEwMDIyMDhjNjdjODhkYWI0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UwbRPmdNWH2YKugHfa-OEiCIitCi-F6F7sFUk3FS-70'
  }
};

export const getRundomMovies = async () => {
    const res = axios.get(url, options);
    return res;
}

export const getMovieDetail = async (id) => {
    const res = axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
    return res;
}

export const searchMovies = async (nameMovies) => {
    const res = axios.get(`https://api.themoviedb.org/3/search/movie?query=${nameMovies}&include_adult=false&language=en-US&page=1`, options);
    return res;
}

export const castMovie = async (id) => {
    const res = axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options);
    return res;
}

export const reviewMovie = async (id) => {
    const res = axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, options);
    return res;
}