import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "../constants";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),

  endpoints: (builder) => ({
    getMoviesPopular: builder.query({
      query: () => `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    }),

    getMoviesUpcoming: builder.query({
      query: () => `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    }),

    getdetail: builder.query({
      query: (id) => `/movie/${id}?api_key=${API_KEY}&language=en-US`,
    }),

    getsearch: builder.query({
      query: (val) =>
        `/search/movie?api_key=${API_KEY}&language=en-US&query=${val}=1&include_adult=false`,
    }),

    getsimilar: builder.query({
      query: (id) =>
        `/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`,
    }),

    getreviews: builder.query({
      query: (id) =>
        `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    }),

    getcredit: builder.query({
      query: (id) => `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
    }),

    getImages: builder.query({
      query: (id) => `/movie/${id}/images?api_key=${API_KEY}&language=en-US`,
    }),
  }),
});

export const {
  useGetMoviesUpcomingQuery,
  useGetMoviesPopularQuery,
  useGetdetailQuery,
  useGetsearchQuery,
  useGetsimilarQuery,
  useGetreviewsQuery,
  useGetcreditQuery,
  useGetImagesQuery,
} = moviesApi;
