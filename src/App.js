import "./App.css";
import Navigation from "./components/nav/nav";
import Hero from "./components/hero/hero";
import Specials from "./components/specials/specials";
import Devices from "./components/devices/devices";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Hero></Hero>
      <Specials></Specials>
      <Devices></Devices>
      <Footer></Footer>
    </div>
  );
}

export default App;
