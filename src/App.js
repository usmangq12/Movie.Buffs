import { Grid } from "@mui/material";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Routers } from "./Routers";

function App() {
  return (
    <Grid container>
      <NavBar />
      <Routers />
    </Grid>
  );
}

export default App;
