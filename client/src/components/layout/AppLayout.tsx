import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";


export default function AppLayout() {
  return (
     <Box>
        <Typography variant="h1">Header</Typography>
        <Typography variant="h1">Sidebar</Typography>
        <Outlet />  
      </Box>
  )
}

