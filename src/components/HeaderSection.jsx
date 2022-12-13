import React from "react";
import { Grid, Typography, TextField, Autocomplete } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetsearchQuery } from "../services/sevices";
import CircularProgress from "@mui/material/CircularProgress";
import { Headerbackground } from "../assest";
import { Container } from "@mui/system";

export const HeaderSection = () => {
  const [val, setVal] = useState("a");
  const navigation = useNavigate();

  const { data, error, isLoading } = useGetsearchQuery(val);
  if (error) return <div>some things went wrong</div>;
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

  const setItem = (value) => {
    navigation(`detail/${value.id}`);
  };

  return (
    <Container>
      <Grid
        container
        p={12}
        item
        sx={{
          backgroundImage: `url(${Headerbackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <Grid item sx={{ mx: "auto", my: "auto" }}>
          <Typography
            sx={{
              color: "white",
              fontWeight: "700",
              fontSize: "3em",
              fontFamily: "Source Sans Pro, Arial, sans-serif",
            }}
          >
            Welcome.
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontWeight: "600",
              fontSize: "2em",
            }}
          >
            Millions of movies, TV shows and people to discover. Explore now.
          </Typography>
          <Grid item>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              size="small"
              disableClearable
              options={data.results}
              getOptionLabel={(movie) => movie.title}
              onChange={(event, value) => setItem(value)}
              renderInput={(params) => (
                <TextField
                  sx={{ backgroundColor: "white" }}
                  {...params}
                  label="Movie"
                  onChange={(e) => setVal(e.target.value)}
                />
              )}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
