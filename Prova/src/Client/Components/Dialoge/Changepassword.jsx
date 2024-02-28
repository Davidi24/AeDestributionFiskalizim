import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import "./Changepassword.css";

const Changepassword = () => {
  const [open, setOpen] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = () => {
    // Handle saving logic here
    console.log("New Password:", newPassword);
    console.log("Repeat Password:", repeatPassword);
    setOpen(false);
  };

  // Define the scaling factor for font size
  const fontSizeFactor = fullScreen ? 0.7 : 1;

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        PaperProps={{
          style: {
            maxWidth: "400px",
            width: "100%", // Ensure the dialog doesn't exceed the screen width
            height: "auto", // Let the height adjust based on content
            margin: "0 auto", // Center the dialog horizontally
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "20px",
          },
        }}
      >
        <DialogTitle id="responsive-dialog-title">
          <Typography
            variant="h4"
            style={{ fontSize: `${fontSizeFactor * 1.1}rem` }}
          >
            Do you want to change the password?
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="newPassword"
            label="New Password"
            type="password"
            fullWidth
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            InputProps={{
              style: { fontSize: `${fontSizeFactor}rem` },
              classes: { root: "smaller-input" }, // Add a custom class
            }}
          />
          <TextField
            margin="dense"
            id="repeatPassword"
            label="Repeat New Password"
            type="password"
            fullWidth
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            InputProps={{
              style: { fontSize: `${fontSizeFactor}rem` },
              classes: { root: "smaller-input" }, // Add a custom class
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{ fontSize: `${fontSizeFactor}rem` }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            autoFocus
            style={{ fontSize: `${fontSizeFactor}rem` }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Changepassword;
