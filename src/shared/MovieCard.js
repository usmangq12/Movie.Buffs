import React from "react";
import { Grid, Card, Typography, CardMedia } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export const MovieCard = ({
  isLoading,
  title,
  release_date,
  image,
  vote,
  papolarity,
}) => {
  return (
    <Grid item sx={{ p: 2 }}>
      <Card
        sx={{
          width: "160px",
          backgroundColor: "#fff",
          boxShadow: "none",
        }}
      >
        <Grid>
          {isLoading ? (
            <Grid
              container
              alignItems={"center"}
              height={"100vh"}
              justifyContent={"center"}
            >
              <CircularProgress />
            </Grid>
          ) : (
            <CardMedia
              sx={{ borderRadius: "8px" }}
              component="img"
              height="250"
              image={"https://www.themoviedb.org/t/p/original" + image}
              alt="Image-error"
            />
          )}
          <Grid
            sx={{
              position: "relative",
              display: "inline-flex",
              top: "-28px",
              left: `${vote ? "10px" : "110px"}`,
            }}
          >
            <CircularProgress
              sx={{ backgroundColor: "black", borderRadius: "50%" }}
              variant="determinate"
              color="success"
              value={vote ? (vote * 100) / 10 : (papolarity * 100) / 100}
            />
            <Grid
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {vote ? (
                <Typography
                  variant="caption"
                  component="div"
                  fontWeight="1000"
                  color="white"
                >
                  {`${Math.round((vote * 100) / 10)}%`}
                </Typography>
              ) : (
                <Typography
                  variant="caption"
                  component="div"
                  fontWeight="1000"
                  color="white"
                >
                  {`${Math.round((papolarity * 100) / 100)}%`}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Typography fontWeight={"bold"}>{title}</Typography>
        <Typography>{release_date}</Typography>
      </Card>
    </Grid>
  );
};
