import React from "react";
import { useGetImagesQuery } from "../services/sevices";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";

export const MoviesImage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetImagesQuery(id);

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
    <Grid container sx={{ width: "90%", mx: "auto" }}>
      <Grid item>
        <Typography fontSize={"30px"}>Movie Images</Typography>
        <Card
          sx={{
            backgroundImage: `url(${
              "https://www.themoviedb.org/t/p/original" + data.backdrop_path
            })`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></Card>
      </Grid>
    </Grid>
  );
};
