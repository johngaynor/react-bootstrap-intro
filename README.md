# Bootstrap & React Intro

This is my first project using React and Bootstrap as frameworks for an application. I modeled this site after Apple's homepage (https://www.apple.com/) to gain a better understanding of how React functions as well as how Bootstrap components work.

# Deployed Link (via Firebase)

https://n322-38442.web.app

# Highlights

## React Components

I thoroughly enjoyed learning how React uses components to load information onto a page. Lots of importing and exporting was a good refresher on file paths. An example of a simple component js file is shown below.

```js
import { Container } from "react-bootstrap";
import styles from "./hero.css";
import iphoneHero from "../images/iphone-hero.jpeg";

function Hero() {
  return (
    <Container fluid>
      <h1>iPhone 14</h1>
      <h2>Big and bigger.</h2>
      <div>
        <a href="#">Learn more {">"}</a>
        <a href="#">Buy {">"}</a>{" "}
      </div>
      <img src={iphoneHero} alt="iphone 14" />
    </Container>
  );
}

export default Hero;
```

## Bootstrap CSS Classes

It took me a minute to understand how these worked but they very quickly grew on me. Bootstrap's baked in CSS classes made styling significantly easier. There were several components (such as the footer and hero sections) that hardly needed any (if at all) styling from an external stylesheet. I found a full list of classes here https://www.w3schools.com/bootstrap4/bootstrap_ref_all_classes.asp
that made styling much more streamlined. Below is the component shown above but with Bootstrap classes attached.

```js
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
```

# Problems Encountered

1. Prior to discovering Bootstrap's classes I struggled to style a lot of the components. There was default styling attached (like padding on the sides) that I couldn't overwrite with my own CSS using typical methods (margin, padding, position). Most of these issues were fixable with Bootstrap classes.
2. I am still new to Bootstrap so there are probably some instances that could be solved in less lines of code. I intend on doing a full comprehensive study of Bootstrap classes prior to my next project to optimize my class usage for more streamlined developing.
