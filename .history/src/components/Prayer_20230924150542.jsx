import Card from "@mui/material/Card";
import "../App.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function MediaCard({ name, time, image }) {
  return (
    <Card className="card">
      <CardMedia sx={{ height: 140 }} image={image} title="fajr-prayer" />
      <CardContent>
        <h2>{name}</h2>
        <h1>{time}</h1>
      </CardContent>
    </Card>
  );
}
