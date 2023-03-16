import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Button,
  Typography,
  Container,
  Switch,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Alert,
  AlertTitle,
} from "@mui/material";
export default function Add() {
  const baseURL = `https://640e9edacde47f68db33ee1a.mockapi.io/Films`;
  const formik = useFormik({
    initialValues: {
      title: "",
      nation: "",
      year: "",
      cost: 0,
      clip: "",
      info: "",
      img: "",
      famous: false,
    },
    onSubmit: (values) => {
      fetch(baseURL, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setOpen(true);
          console.log(data);
        })
        .catch((error) => console.log(error.message));
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      nation: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      year: Yup.number()
        .required("Required.")
        .test(
          "len",
          "Must be exactly 4 characters",
          (val) => val && val.toString().length === 4
        )
        .max(new Date().getFullYear()),
      info: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
      clip: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
      img: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
    }),
  });
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container sx={{ pt: 4 }}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          autoFocus
          margin="dense"
          name="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        {formik.errors.title && (
          <Typography variant="caption" color="red">
            {formik.errors.title}
          </Typography>
        )}
        <TextField
          margin="dense"
          name="year"
          label="Year"
          type="number"
          fullWidth
          variant="standard"
          value={formik.values.year}
          onChange={formik.handleChange}
        />
        {formik.errors.year && (
          <Typography variant="caption" color="red">
            {formik.errors.year}
          </Typography>
        )}
        <TextField
          margin="dense"
          name="nation"
          label="Nation"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.nation}
          onChange={formik.handleChange}
        />
        {formik.errors.nation && (
          <Typography variant="caption" color="red">
            {formik.errors.nation}
          </Typography>
        )}
        <TextField
          margin="dense"
          name="img"
          label="URL of image"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.img}
          onChange={formik.handleChange}
        />
        {formik.errors.img && (
          <Typography variant="caption" color="red">
            {formik.errors.img}
          </Typography>
        )}
        <TextField
          margin="dense"
          name="cost"
          label="Market value"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.cost}
          onChange={formik.handleChange}
        />
        {formik.errors.cost && (
          <Typography variant="caption" color="red">
            {formik.errors.cost}
          </Typography>
        )}
        <TextField
          margin="dense"
          name="clip"
          label="Intro video"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.clip}
          onChange={formik.handleChange}
        />
        {formik.errors.clip && (
          <Typography variant="caption" color="red">
            {formik.errors.clip}
          </Typography>
        )}
        <TextField
          multiline
          rows={2}
          margin="dense"
          name="info"
          label="Information"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.info}
          onChange={formik.handleChange}
        />
        {formik.errors.info && (
          <Typography variant="caption" color="red" display="block">
            {formik.errors.info}
          </Typography>
        )}
        <FormControlLabel
          control={<Switch />}
          label="Famous"
          name="famous"
          value={formik.values.famous}
          onChange={formik.handleChange}
        />
        <br />
        <Button variant="contained" size="small" type="submit">
          Add
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Congraturation"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Alert severity="success">
                <AlertTitle>Adding successful!</AlertTitle>
              </Alert>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>
              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                Dashboard
              </Link>
            </Button>
            <Button autoFocus onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </Container>
  );
}
