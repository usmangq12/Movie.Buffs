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
import { Container } from "@mui/system";

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
  if (error) return <div>some things went wrong</div>;
  return (
    <Grid container item sx={{ marginTop: 4 }}>
      <Card
        sx={{
          display: "flex",
          px: { xs: 4, sm: 10 },
          py: { xs: 2, sm: 6 },
          position: "relative",
          zIndex: "1",
          backgroundImage: `url(${
            "https://www.themoviedb.org/t/p/original" + data.backdrop_path
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Grid
          container
          sx={{
            flexWrap: { xs: "wrap", sm: "nowrap" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={6} md={2}>
            <CardMedia
              component="img"
              sx={{ height: "400px", borderRadius: "8px" }}
              image={
                "https://www.themoviedb.org/t/p/original" + data.backdrop_path
              }
              alt="nature"
            />
          </Grid>
          <Grid
            item
            sx={{ display: "flex", flexDirection: "column" }}
            xs={12}
            sm={6}
            md={10}
          >
            <CardContent>
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
      <Container>
        <Grid container item>
          <Credits />
        </Grid>

        <Grid container item>
          <Reviews />
        </Grid>

        <Grid container item>
          <MoviesImage />
        </Grid>
      </Container>
      <Grid container item>
        <SimilarMovies />
      </Grid>
    </Grid>
  );
};
