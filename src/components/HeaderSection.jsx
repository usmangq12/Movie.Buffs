import React from "react";
import { Grid, Typography, TextField, Autocomplete } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetsearchQuery } from "../services/sevices";
import CircularProgress from "@mui/material/CircularProgress";
import { Headerbackground } from "../assest";

export const HeaderSection = () => {
  const [val, setVal] = useState("a");
  const navigation = useNavigate();

  const { data, error, isLoading } = useGetsearchQuery(val);

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
    <Grid
      container
      item
      sx={{
        backgroundImage: `url(${Headerbackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "80%",
        height: "42vh",
        mx: "auto",
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
            sx={{
              width: "90%",
              backgroundColor: "white",
              mt: 4,
              borderRadius: "20px",
            }}
            options={data.results}
            getOptionLabel={(movie) => movie.title}
            onChange={(event, value) => setItem(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Movie"
                onChange={(e) => setVal(e.target.value)}
              />
            )}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
