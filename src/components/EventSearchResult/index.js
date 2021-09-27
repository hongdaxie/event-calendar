import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./EventSearchResult.css";

const EventSearchResult = (props) => {
  const { title, description, start } = props;
  return (
    <div className="EventSearchResult">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Event title: {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Event description: {description}
          </Typography>
          <Typography variant="body2">Event start time: {start}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventSearchResult;
