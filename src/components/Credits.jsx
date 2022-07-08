import React from "react";
import { useGetcreditQuery } from "../services/sevices";
import { useParams } from "react-router-dom";
import { MovieCard } from "../shared/MovieCard";
import { Grid, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export const Credits = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetcreditQuery(id);

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
  console.log(data);
  return (
    <Grid container item>
      <Grid item sx={{ width: "90%", mx: "auto", my: "20px" }}>
        <Typography fontSize={"30px"} fontWeight={"900px"}>
          Top Billed Cast
        </Typography>
      </Grid>
      <Grid
        container
        item
        sx={{
          mt: "20px",
          mx: "auto",
          flexWrap: "nowrap",
          overflowX: "scroll",
          width: "80%",
        }}
      >
        {data.cast.map((data) => (
          <MovieCard
            title={data.name}
            release_date={data.character}
            image={data.profile_path}
            papolarity={data.popularity}
          />
        ))}
      </Grid>
    </Grid>
  );
};
