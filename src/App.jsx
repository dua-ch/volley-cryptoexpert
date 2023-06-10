import About from "./pages/About";
import "./App.css";
import AppProvider from "./context/AppContext";

function App() {
  return (
    <>
      <AppProvider>
        <About />
      </AppProvider>
    </>
  );
}

export default App;
