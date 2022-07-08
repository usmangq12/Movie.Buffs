import React from "react";
import { Grid } from "@mui/material";
import { useGetdetailQuery } from "../services/sevices";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SimilarMovies from "../components/SimilarMovies";
import Reviews from "../components/Reviews";
import { Credits } from "../components/Credits";
import CircularProgress from "@mui/material/CircularProgress";
import { MoviesImage } from "../components/MoviesImage";

export const Deatail = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetdetailQuery(id);

  if (isLoading)
    return (
      <Grid
        container
        alignItems={"center"}
        height={"100vh"}
        justifyContent={"center"}
      >
        <CircularProgress />
      </Grid>
    );
  return (
    <Grid container item sx={{ marginTop: 4 }}>
      <Card
        sx={{
          display: "flex",
          pl: 10,
          pt: 6,
          pb: 6,
          width: "90%",
          mx: "auto",
          position: "relative",
          zIndex: "1",
          backgroundImage: `url(${
            "https://www.themoviedb.org/t/p/original" + data.backdrop_path
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 350, height: "350px", borderRadius: "8px" }}
          image={"https://www.themoviedb.org/t/p/original" + data.backdrop_path}
          alt="nature"
        />
        <Grid item sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" color="white">
              {data.title} ({data.release_date})
            </Typography>
            <Typography variant="subtitle1" color="#fff" component="div">
              <h3>Overview</h3>
            </Typography>

            <Typography variant="subtitle1" color="white" component="div">
              {data.overview}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            backgroundColor: "black",
            opacity: "0.8",
            zIndex: "-1",
          }}
        ></Grid>
      </Card>

      <Grid container item>
        <Credits />
      </Grid>

      <Grid container item>
        <Reviews />
      </Grid>

      <Grid container item>
        <MoviesImage />
      </Grid>

      <Grid container item>
        <SimilarMovies />
      </Grid>
    </Grid>
  );
};
