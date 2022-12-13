import React from "react";
import { Grid, Typography } from "@mui/material";
import { useGetreviewsQuery } from "../services/sevices";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";

export default function Reviews() {
  const { id } = useParams();

  const { data, error, isLoading } = useGetreviewsQuery(id);

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
    <Grid container item>
      <Grid item>
        <Typography fontSize={"40px"}>Reviews</Typography>
      </Grid>

      {data.results.map((data, i) => (
        <Card
          key={i}
          sx={{
            borderRadius: "8px",
            backgroundColor: "white",
            mt: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.3em",
              fontFamily: "'Source Sans Pro', Arial, sans-serif",
              mt: 1,
              ml: 3,
            }}
          >
            A review by {data.author}
          </Typography>
          <Typography sx={{ ml: 3 }}>
            Written by {data.author} on {data.created_at}
          </Typography>
          <Typography sx={{ my: 3, mx: 3 }}>{data.content}</Typography>
        </Card>
      ))}
    </Grid>
  );
}
