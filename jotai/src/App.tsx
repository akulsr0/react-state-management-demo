import { Provider } from "jotai";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Provider>
      <Header />
      <Body />
      <Footer />
    </Provider>
  );
}

export default App;
