import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React, { Component } from "react";
import List from "../List/List";
import callApi from "../Utils/APICaller";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    callApi("Films", "GET", null).then((res) => {
      this.setState({
        news: res.data,
      });
    });
  }
  render() {
    var { news } = this.state;
    console.log(news);
    return (
      <Container>
        <Box>
          <List F={news} />
        </Box>
      </Container>
    );
  }
}
export default Home;
