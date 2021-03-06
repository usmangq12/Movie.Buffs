import React from "react";
import { Grid } from "@mui/material";
import { HeaderSection } from "../components/HeaderSection";
import { useGetMoviesPopularQuery } from "../services/sevices";
import { useGetMoviesUpcomingQuery } from "../services/sevices";
import Movies from "../components/Movies";

export const MainPage = () => {
  const {
    data: PopularMovies,
    error: PopularMoviesError,
    isLoading: PopularMoviesisLoading,
  } = useGetMoviesPopularQuery();
  const {
    data: UpcomingMovies,
    error: UpcomingMoviesError,
    isLoading: isComingLoading,
  } = useGetMoviesUpcomingQuery();

  // console.log(PopularMovies);

  return (
    <Grid container item>
      <HeaderSection />
      <Movies
        title={"Popular Movies"}
        data={PopularMovies}
        isLoading={PopularMoviesisLoading}
      />
      <Movies
        title={"UpComing Movies"}
        data={UpcomingMovies}
        isLoading={isComingLoading}
      />
    </Grid>
  );
};
