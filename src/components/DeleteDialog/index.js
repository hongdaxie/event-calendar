import * as React from "react";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

const DeleteDialog = (props) => {
  const {
    handleCancelDelete,
    handleConfirmDelete,
    eventId,
    eventName,
    eventDescription,
    eventTime,
    confirmLoading,
  } = props;

  return (
    <div>
      <Dialog open onClose={handleCancelDelete}>
        <DialogTitle>Are u sure to delete this event?</DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>Event name: {eventName}</Typography>
          <Typography gutterBottom>
            Event description: {eventDescription}
          </Typography>
          <Typography gutterBottom>Event time: {eventTime}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete}>Cancel</Button>
          <LoadingButton
            loading={confirmLoading}
            variant="contained"
            onClick={() => handleConfirmDelete(eventId)}
          >
            Confirm
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteDialog;
