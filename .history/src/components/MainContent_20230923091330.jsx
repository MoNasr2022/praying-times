import { Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "../App.css";
import Prayer from "./Prayer";
export default function MainContent() {
  return (
    <>
      {/* Top Row */}
      <Grid container>
        <Grid xs={6}>
          <div>
            <h2> 4:20 | 9 2023 سبتمر </h2>
            <h1> مكة المكرمة </h1>
          </div>
        </Grid>
        <Grid xs={6}>
          <div>
            <h2> 4:20 | 9 2023 سبتمر </h2>
            <h1> مكة المكرمة </h1>
          </div>
        </Grid>
      </Grid>
      <Divider style={{ borderColor: "white", opacity: "0.1" }} />
      {/* Prayers Cards */}
      <section>
        <Prayer name=""/>
        <Prayer name=""/>
        <Prayer name=""/>
        <Prayer name=""/>
        <Prayer name=""/>
      </section>
    </>
  );
}
