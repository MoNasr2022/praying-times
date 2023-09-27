import { Divider, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "../App.css";
import Prayer from "./Prayer";
import Select from "@mui/material/Select";
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
        <Prayer name="Fajr" time="4:20"/>
        <Prayer name="Dhur" time="1:20"/>
        <Prayer name="Aser" time="4:54"/>
        <Prayer name="Maghrib" time="7:20"/>
        <Prayer name="Isha" time="8:44"/>
          </section>
          {/* Bottom Row */}
          <Stack F>
              <Select>
                  
            </Select>
          </Stack>
    </>
  );
}