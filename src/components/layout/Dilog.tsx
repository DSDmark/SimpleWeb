import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
  TextField,
  DialogContent,
  Box,
} from "@mui/material";
import { getUser } from "@/state/repo";
import { AppDispatch } from "@/state";
import { GitHub } from "@mui/icons-material";
import { useState, ChangeEvent } from "react";

const GetUserName = () => {
  const dispatch: AppDispatch = useDispatch();
  const [userInput, setInput] = useState<string>("");
  const [open, setOpen] = useState<boolean>(true);

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(getUser(userInput));
  };

  return (
    <Dialog onClose={handleClose} open={open} >
      <DialogTitle>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <GitHub sx={{ mb: 2 }} fontSize="large" />
          Enter your GitHub username
        </Box>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="username"
          label="GitHub Username"
          color="warning"
          type="text"
          onChange={handleInput}
          value={userInput}
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="warning" onClick={handleClose}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GetUserName
