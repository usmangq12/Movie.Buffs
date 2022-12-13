import React from "react";
import { Grid, Typography } from "@mui/material";
import { MovieCard } from "../shared/MovieCard";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/system";

export default function Movies({ title, data, isLoading }) {
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

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Grid container item sx={{ mb: 3 }}>
        <Grid item sx={{ my: "20px" }}>
          <Typography fontSize={"30px"}>{title}</Typography>
        </Grid>
        <Grid
          container
          item
          sx={{
            mt: "20px",
            flexWrap: "nowrap",
            overflowX: "scroll",
          }}
        >
          {data.results.map((data, i) => (
            <Link
              key={i}
              to={`/detail/${data.id}`}
              style={{ textDecoration: "none" }}
              onClick={goToTop}
            >
              <MovieCard
                isLoading={isLoading}
                title={data.title}
                release_date={data.release_date}
                image={data.backdrop_path}
                vote={data.vote_average}
              />
            </Link>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
