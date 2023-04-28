import "./App.css";
import { AppStateProvider } from "./contexts/AppContext";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <AppStateProvider>
      <Header />
      <Body />
      <Footer />
    </AppStateProvider>
  );
}

export default App;
