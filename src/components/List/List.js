import * as React from "react";
import { Row, Col } from "react-materialize";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function List(F) {
  console.log(F);
  return (
    <div>
      <Container sx={{ pt: 4 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Row>
            <Grid container spacing={4}>
              {F.F.map(
                (f, index) =>
                  f.famous == true && (
                    <Grid zeroMinWidth item xs={12} xl={4} md={4}>
                      {/* //_________________________________CARD_________________________ */}
                      <Card
                        sx={{ maxWidth: 345, backgroundColor: "third.main" }}
                        elevation={5}
                      >
                        <CardMedia
                          sx={{ height: 345 }}
                          image={f.img}
                          title={f.title}
                        />
                        <CardContent>
                          <Typography
                            noWrap
                            gutterBottom
                            variant="h5"
                            component="div"
                          >
                            {f.title}
                          </Typography>
                          <Typography
                            noWrap
                            gutterBottom
                            component="div"
                            sx={{ fontWeight: "bold" }}
                          >
                            {f.year}
                          </Typography>
                          <Typography noWrap gutterBottom component="div">
                            Cost: {f.cost}đ
                          </Typography>
                          <Typography
                            noWrap
                            variant="body1"
                            color="text.secondary"
                          >
                            {f.nation}
                          </Typography>
                          <Typography
                            noWrap
                            variant="body2"
                            color="text.secondary"
                          >
                            {f.info}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Link to={`/detail/${f.id}`}>
                            <Button
                              variant="contained"
                              size="small"
                              color="secondary"
                            >
                              {" "}
                              Detail{" "}
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                      {/* //_________________________________CARD_________________________ */}
                    </Grid>
                  )
              )}
            </Grid>
          </Row>
        </Box>
      </Container>
    </div>
  );
}
{
  /* <Paper style={{ background: "#3333" }} className="card">
                        <div className="card-image">
                          <img src={f.img} alt={f.title} />
                        </div>
                        <div className="card-title">{f.title}</div>
                        <div className="card-content">{f.descrition}</div>
                        <Link to={`/detail/${f.id}`}>
                          <div className="card-action">
                            <Button variant="contained">Detail</Button>
                          </div>
                        </Link>
                      </Paper> */
}
