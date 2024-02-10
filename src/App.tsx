import { ThemeProvider } from "@material-tailwind/react";
import Router from "./Router";

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
