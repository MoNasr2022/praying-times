
import Card from "@mui/material/Card";
import "../A"
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <Card className="card">
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.pexels.com/photos/16961112/pexels-photo-16961112/free-photo-of-surrounded-by-circles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="fajr-prayer"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fajr
        </Typography>
              <Typography variant="h5" color="text.secondary">
            4:20 
        </Typography>
      </CardContent>
      
    </Card>
  );
}
