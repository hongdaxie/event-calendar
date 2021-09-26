import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

const DeleteDialog = (props) => {
  const {
    handleCancelDelete,
    handleConfirmDelete,
    eventName,
    eventDescription,
    eventTime,
  } = props;
  return (
    <div>
      <Dialog
        open
        onClose={handleCancelDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are u sure to delete this event?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography gutterBottom>Event name: {eventName}</Typography>
            <Typography gutterBottom>
              Event description: {eventDescription}
            </Typography>
            <Typography gutterBottom>Event time: {eventTime}</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete}>Cancel</Button>
          <Button onClick={handleConfirmDelete}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteDialog;
