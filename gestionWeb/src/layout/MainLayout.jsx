import { useState, useContext } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../context/ColorModeContext";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function MainLayout({ children }) {
  const [open, setOpen] = useState(false);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={{ display: "flex" }}>
      {/* NAVBAR */}
      <AppBar position="fixed" sx={{ zIndex: 1300 }}>
        <Toolbar>
          <IconButton color="inherit" onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>
          <Typography sx={{ flexGrow: 1, ml: 2 }}>Mi Dashboard</Typography>

          {/* MODO OSCURO/LUZ */}
          <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* SIDEBAR RESPONSIVE */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        <List>
          <ListItemButton component={Link} to="/" onClick={() => setOpen(false)}>
            Inicio
          </ListItemButton>
          <ListItemButton component={Link} to="/perfil" onClick={() => setOpen(false)}>
            Perfil
          </ListItemButton>
        </List>
      </Drawer>

      {/* CONTENIDO PRINCIPAL */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        {children}
      </Box>
    </Box>
  );
}
