import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const EventTooltip = (props) => {
  const { eventName, eventDescription, children } = props;
  return (
    <div>
      <LightTooltip
        title={
          <>
            <Typography variant="h4" gutterBottom>
              {eventName}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {eventDescription}
            </Typography>
          </>
        }
      >
        {children}
      </LightTooltip>
    </div>
  );
};

export default EventTooltip;
