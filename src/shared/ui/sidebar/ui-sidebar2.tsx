import React, { useState } from "react";
import Link from 'next/link'

import { useTheme } from '@mui/material';
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  
  CssBaseline,
  Drawer,
  Typography
} from "@mui/material";
import Button from "@mui/material/Button";
import {
  Apps,
  Menu,
  ContactMail,
  AssignmentInd,
  Home
} from "@mui/icons-material";
import { usePathname } from "next/navigation";
import clsx from "clsx";




const listItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listpatch:"/"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listpatch:"/user"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listpatch:"/portfol"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listpatch:"/rtyui"
  }
];


export  function Sidebar2() {

  const [open, setOpen] = useState(false);
  const customTheme = useTheme();
  const toggleSlider = () => {
    setOpen(!open);
  };
  const pathname = usePathname();
  const menuItemActive = {
    cursor: 'pointer',
    background: customTheme.palette.primary.light,
    color: customTheme.palette.primary.contrastText,
  
  };

  const menuItem = {
    padding: '0 8px',
    color: "#755A57",
    '&:hover': menuItemActive,
    
  };

  const sideList = () => (
    <Box sx={(theme) => ({width: 250,
        background: "#b2edc8",
        height: "100%"})} component="div">
   
      <Divider />
      <List>
        {listItems.map((listItem, index) => (
          <Link  href={listItem.listpatch}  key={index} 
          passHref >
          <ListItem sx={(pathname === listItem.listpatch) ? menuItemActive : menuItem}
               key={index}>
            <ListItemIcon sx={{color: "#755A57"}}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText primary={listItem.listText} />
          </ListItem>
          </Link>
        ))}
      </List>
    </Box>
   
  );

  return (

     

      <Box component='nav' sx={{ flexGrow: 1 }} >
      <AppBar position='static'   >
          <Toolbar>
            <IconButton onClick={toggleSlider} color="inherit">
              <Menu />
            </IconButton>
            <Typography>Меню</Typography>
            <Drawer open={open} anchor="left" onClose={toggleSlider}>
              {sideList()}
            </Drawer>
          </Toolbar>
          </AppBar>
      </Box>
    
  );
}
