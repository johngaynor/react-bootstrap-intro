import { Container } from "react-bootstrap";
import styles from "./hero.css";
import iphoneHero from "../images/iphone-hero.jpeg";

function Hero() {
  return (
    <Container fluid className="d-flex-column hero-container">
      <h1>iPhone 14</h1>
      <h2 className="mx-auto">Big and bigger.</h2>
      <div className="hero-links mx-auto">
        <a href="#">Learn more {">"}</a>
        <a href="#">Buy {">"}</a>{" "}
      </div>
      <img src={iphoneHero} alt="iphone 14" className="my-4" />
    </Container>
  );
}

export default Hero;
