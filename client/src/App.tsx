import { Route, Routes } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from './pages/NotFound';
import Dashboard from "./pages/Dashboard";
import AppLayout from "./components/layout/AppLayout";
import { theme } from "./ui/theme";
import CreateNote from './pages/CreateNote';


const queryClient = new QueryClient();


function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route
        path="/"
        element={
        <AppLayout />
        }
        >
          <Route 
          index
          element={
          <Dashboard />
          }
          />
          <Route 
          path="/notes/new"
          element={<CreateNote />}
          />
          <Route
            path="bookmarks"
            element={
              <Box>
              <Typography variant="h1">Bookmarks</Typography>
            </Box>
            }
          />
          <Route
            path="archive"
            element={
              <Box>
              <Typography variant="h1">Archive</Typography>
            </Box>
            }
          />
          <Route
            path="settings"
            element={
              <Box>
              <Typography variant="h1">Settings</Typography>
            </Box>
            }
          />
        </Route>
        <Route
          path="*"
          element={
          <NotFound/>
          }
        />
      </Routes>
   </ThemeProvider>
   </QueryClientProvider>
  )
}


export default App
