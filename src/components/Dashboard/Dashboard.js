import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  Button,
  TableBody,
  Container,
  Box,
  Typography,
  IconButton,
  Modal,
} from "@mui/material";
import ReactPlayer from "react-player";
import AddIcon from "@mui/icons-material/Add";
import BuildIcon from "@mui/icons-material/Build";
import ClearIcon from "@mui/icons-material/Clear";
import { useEffect, useState } from "react";
import callApi from "../Utils/APICaller";
import { Link } from "react-router-dom";
import { async } from "@firebase/util";
import DeleteIcon from "@mui/icons-material/Delete";
const styleBox = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  textAlign: "center",
};
export default function Dashboard() {
  const [list, setList] = useState([]);
  const [modal, setModal] = useState("0");
  async function getData() {
    await callApi("Films", "GET", null).then((res) => {
      setList(res.data);
    });
    console.log(list);
  }
  useEffect(() => {
    getData();
  });
  async function deleteData(id) {
    await callApi("Films/" + id, "DELETE", null).then((res) => {
      console.log(res);
    });
    window.location.reload();
  }
  return (
    <div>
      <Container maxWidth={"xl"} sx={{ pt: 3 }}>
        <Link to="/add">
          <Button variant="contained" color="secondary">
            <AddIcon />
            Add New
          </Button>
        </Link>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Table style={{ backgroundColor: "inherit", marginBottom: "20px" }}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Clip</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Cost</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>Nation</TableCell>
                <TableCell>Info</TableCell>
                <TableCell>Famous</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((list, index) => (
                <TableRow
                  key={list.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{list.id}</TableCell>
                  <TableCell>
                    <img
                      style={{ width: "320px", height: "240px" }}
                      src={list.img}
                    ></img>
                  </TableCell>
                  <TableCell>
                    <iframe
                      width="320px"
                      height="240px"
                      src={list.clip}
                      title={list.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{list.title}</Typography>
                  </TableCell>
                  <TableCell>{list.cost}</TableCell>
                  <TableCell>{list.year}</TableCell>
                  <TableCell>{list.nation}</TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      style={{ width: "200px" }}
                      noWrap
                    >
                      {list.info}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {list?.famous == true ? <p>true</p> : <p>false</p>}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      variant="contained"
                      color="error"
                      // onClick={() => deleteData(list.id)}
                      onClick={() => {
                        setModal({ id: list.id });
                      }}
                      sx={{ mt: 3 }}
                    >
                      <DeleteIcon />
                      {
                        // <ClearIcon
                        //   style={{ fontSize: "medium", marginRight: "10px" }}
                        // />
                      }
                    </IconButton>
                    <Modal
                      open={modal !== "0"}
                      onClose={() => {
                        setModal("0");
                      }}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={styleBox}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Are you sure to delete this video.
                        </Typography>
                        <Button
                          color="error"
                          onClick={() => {
                            deleteData(list.id);

                            setModal("0");
                          }}
                        >
                          Yes
                        </Button>
                      </Box>
                    </Modal>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Container>
    </div>
  );
}
