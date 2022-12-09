import { Container, Carousel } from "react-bootstrap";
import React, {useState} from 'react';
import styles from "./specials.css";
import appleGiftImg from "../images/apple-gift.jpeg"
import appleCard from "../images/apple-card.jpeg"

function Specials() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return (
    <Container fluid className="p-0">

    <Carousel activeIndex={index} onSelect={handleSelect}   className="w-100">
      <Carousel.Item className="carousel-gift text-white">
        <img
          className="d-block w-100"
          src={appleGiftImg}
          alt="First slide"
        />
         <h1>Give WOW.</h1>
      <h2 className="mx-auto mb-3">
        This holiday season, find the perfect gift for everyone on your list.
      </h2>
      <div className="gift-links">
        <a href="#">Shop the gift guide {">"}</a>
      </div>
      </Carousel.Item>
      <Carousel.Item className="carousel-card text-white">
        <h1>Apple Card</h1>
        <h2 className="mx-auto">Save 5% on Apple products with a new Apple Card through December 25.</h2>
        <h2 className="mt-3 mx-auto">Only at Apple.</h2>
        <h2 className="mx-auto">Exclusions and terms apply.<sup>1</sup></h2>
        <div className="card-links mx-auto">
             <a href="#">Learn more {'>'}</a>
            <a href="#">Apply now {'>'}</a>
        </div>
        <img
          className="d-block w-100 p-3"
          src={appleCard}
          alt="Second slide"
        />
       
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}


export default Specials;