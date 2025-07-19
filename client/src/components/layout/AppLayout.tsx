import { AppBar, Avatar, Box, Drawer, IconButton, Toolbar, Tooltip, Typography, Divider, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { MenuIcon, NoteIcon, DashboardIcon, BookmarkIcon, ArchiveIcon, SettingsIcon } from "../../ui/icons";


const DRAWER_WIDTH = 280;


export default function AppLayout() {

  const navigate = useNavigate();
  const location = useLocation();

const navigationItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
    badge: null
  },
  {
    text: "Bookmarks",
    icon: <BookmarkIcon />,
    path: "/bookmarks",
    badge: null
  },
  {
    text: "Archive",
    icon: <ArchiveIcon />,
    path: "/archive",
    badge: null
  }
]  


const renderMenus = () => (
  <Box sx={{height: "100%", display: "flex", flexDirection: "column"}}>
    <Box sx={{p: 2, display: "flex", alignItems: "center", gap:1}}>
      <Avatar sx={{bgcolor: "primary.main", width: 32, height: 32}}>
        <NoteIcon sx={{fontSize: 20}} />
      </Avatar>
      <Typography variant="h6" fontWeight="bold">
        Note Manager
      </Typography>
    </Box>

    <Divider />

    <List sx={{flex: 1, px: 1}}>
      {navigationItems.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton
          selected={location.pathname === item.path}
          onClick={() => navigate(item.path)}

          sx={{
            borderRadius: 2,
            mb: 0.5,
           "&.Mui-selected": {
              bgcolor: "primary.light",
              color: "primary.contrastText",
              "&:hover": {
                bgcolor: "primary.main"
              }
            }
          }}
          >
            <ListItemIcon
            sx={{
              color: 
                location.pathname === item.path ? "inherit" : "text.secondary",
              minWidth: 40
             }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontSize: "0.875rem",
                fontWeight: location.pathname === item.path ? 600 : 400,
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>

    <Divider />

    <List>
      <ListItem disablePadding>
        <ListItemButton
        onClick={() => navigate("/settings")}
        sx={{borderRadius: 2}}
        >
          <ListItemIcon sx={{minWidth: 40}}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText 
          primary="Settings" 
          primaryTypographyProps={{fontSize: "0.875rem"}}
          />
        </ListItemButton>
      </ListItem>
    </List>


  </Box>
)



  return (
     <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <AppBar
        position="fixed"
        sx={{
          width: {md: `calc(100% - ${DRAWER_WIDTH}px)`},
          ml: {md: `${DRAWER_WIDTH}px`},
          bgcolor: "background.paper",
          color: "text.primary",
          boxShadow: 1,
          borderBottom: "1px solid",
          borderBottomColor: "divider"
        }}
        >
          <Toolbar>
            <IconButton sx={{mr: 2, display: {md:"none"} }}>
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            </Typography>

            <Tooltip title="User Profile">
              <IconButton sx={{p: 0}}>
                <Avatar alt="Faizul Islam" sx={{width: 32, height: 32}}>
                  S
                </Avatar>
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>


        <Box
            component="nav"
            sx={{
              width: {md: DRAWER_WIDTH},
              flexShrink: {md: 0}
            }}
          >
            {/* <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true 
            }}
            sx={{
              display: {xs: "none", md: "block"},
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: DRAWER_WIDTH,
                borderRight: "1px solid",
  borderRightColor: "divider"
              }
            }}
            ></Drawer> */}

            <Drawer
            variant="permanent"
            sx={{
              display: {xs: "none", md: "block"},
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: DRAWER_WIDTH,
                borderRight: "1px solid",
  borderRightColor: "divider"
              }
            }}
            open
            >
              {renderMenus()}
            </Drawer>
        </Box>

        <Outlet />  
      </Box>
  )
}

