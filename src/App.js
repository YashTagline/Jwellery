import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@material-ui/core";
import "animate.css/animate.min.css";
import Blog from "./components/Blog";
import ShopCatelog from "./components/ShopCatelog";
const theme = createTheme({
  typography: {
    fontFamily: '"Nunito Sans", sans-serif',
    primary: {
      main: "#333",
      backgroundColor: "#192126",
    },
    secondary: {
      main: "#555",
    },
  },
  palette: {
    primary: {
      main: "#30e3ca",
      backgroundColor: "#f3f4f5",
      contrastText: "#000",
    },
    secondary: {
      main: "#c9cdcf",
      backgroundColor: "#282f34",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        padding: "0 30px",
        borderRadius: 0,
        fontSize: 16,
        fontWeight: 600,
        width: 176,
        height: 60,
        display: "inline-block",
        "&:hover.MuiButton-containedPrimary": {
          backgroundColor: "#78f7e5",
        },
      },
      outlinedPrimary: {
        borderWidth: "2px",
        color: "#fff",
        borderColor: "#30e3ca",
        fontWeight: 700,
        "&:hover": {
          borderWidth: "2px",
          color: "#000",
          backgroundColor: "#30e3ca",
        },
      },
      outlinedSecondary: {
        borderWidth: "2px",
        color: "#000",
        borderColor: "#30e3ca",
        fontWeight: 700,
        "&:hover": {
          borderWidth: "2px",
          color: "#000",
          borderColor: "#30e3ca",
          backgroundColor: "#30e3ca",
          boxShadow: "0 20px 38px rgb(0 0 0 / 16%)",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 991,
      xl: 1220,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/shopCatelog" component={ShopCatelog}></Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
