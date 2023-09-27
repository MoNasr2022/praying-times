import Card from "@mui/material/Card";
import "../App.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";



import PropTypes from 'prop-types';

export default function PrayerCard({ name, time, image }) {
  return (
    <Card className="card" >
      <CardMedia sx={{ height: 140 }} image={image} title={name} />
      <CardContent>
        <h2>{name}</h2>
        <Typography variant="h1" color="text.secondary">
          {time}
        </Typography>
      </CardContent>
    </Card>
  );
}

PrayerCard.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

PrayerCard.displayName = 'PrayerCard';

