import { Routes, Route, useLocation } from "react-router-dom";

// Mui
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// Components
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/Login/Login";

// Themes
import styleDark from "../Themes/themeDark";

const themeDark = createTheme(styleDark);

const App = () => {
  const location = useLocation();

  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;