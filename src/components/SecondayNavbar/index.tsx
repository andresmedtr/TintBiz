"use client"

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";

const pages = ["Choose Your Tint", "Benefits", "About us"];

export const SecondaryNavbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FFFFFF", // ⚪ Pure White
        color: "#111111", // ⚫ Deep Black for text
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)", // softer shadow
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LOGO (left side desktop) */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#contact-us"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#111111", // ⚫
              textDecoration: "none",
            }}>
            <Image
              src="/logo/logo1.png"
              alt="Tints@Home Logo"
              width={60}
              height={60}
            />
          </Typography>

          {/* NAV BUTTONS (desktop only) */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#111111", // ⚫
                  display: "block",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  "&:hover": {
                    color: "#E52323", // 🔴 on hover
                  },
                }}>
                {page}
              </Button>
            ))}
          </Box>

          {/* LOGO (mobile) */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#contact-us"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#111111", // ⚫
              textDecoration: "none",
            }}>
            <Image
              src="/logo/logo1.png"
              alt="Tints@Home Logo"
              width={60}
              height={60}
            />
          </Typography>

          {/* BURGER MENU (mobile only) */}
          <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#111111" }} // ⚫
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{
                      color: "#111111", // ⚫
                      textTransform: "uppercase",
                      fontWeight: 500,
                      "&:hover": {
                        color: "#E52323", // 🔴
                      },
                    }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

