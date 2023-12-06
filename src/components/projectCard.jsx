import React from "react";
//Import features from Material UI libraries
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
//main funtion for export
export default function ProjectCard(props) {
  const cardTitle = props.title;
  const image = props.asset;
  const alternative = props.alt;
  const text = props.text;
  const action = props.href;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={alternative} height="140" image={image} />
      <CardContent className="greyBG">
        <Typography gutterBottom variant="h5" color="secondary" component="div">
          {cardTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={action} size="small">
          See More
        </Button>
      </CardActions>
    </Card>
  );
}
