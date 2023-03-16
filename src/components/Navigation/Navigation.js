import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context API/AuthContext";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";

export default function Navigation() {
  //
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { user, logOut } = UserAuth();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  //
  return (
    <div className="Navigation">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "#333333" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Button>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Home
                </Link>
              </Button>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              ></Typography>

              {/* //Login */}
              {user?.displayName ? (
                <div>
                  <Tooltip title="User Profile">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt={user.displayName} src={user.photoURL} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">
                        <Link
                          to="/dashboard"
                          style={{ textDecoration: "none" }}
                        >
                          Dashboard
                        </Link>
                      </Typography>
                    </MenuItem>
                    <MenuItem>
                      <Typography textAlign="center" onClick={handleSignOut}>
                        Logout
                      </Typography>
                    </MenuItem>
                  </Menu>
                </div>
              ) : (
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Sign In
                  </Button>
                </Link>
              )}
              {/* //Login */}
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <div className="bottom-line"></div>
    </div>
  );
}
