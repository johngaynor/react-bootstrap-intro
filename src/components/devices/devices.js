import { Container, Row, Col } from "react-bootstrap";
import styles from "./devices.css";
import iphone14 from "../images/iphone-14.jpeg"
import ipad from "../images/device-ipad.jpeg"
import airpods from "../images/device-airpods.jpeg"
import watch from "../images/device-watch.jpeg"

function Devices() {
    return (
        <Container fluid>
            <Row className="p-2">
                <Col className="device-phone text-white">
                    <h1>iPhone 14 Pro</h1>
                    <h2>Pro. Beyond.</h2>
                    <div className="device-links mx-auto">
                        <a href="#">Learn more {'>'}</a>
                        <a href="#">Buy {'>'}</a>
                    </div>
                    <img src={iphone14} alt="iphone 14"/>
                </Col>
                <Col className="device-ipad">
                    <h1>iPad</h1>
                    <h2>Lovable. Drawable. Magical.</h2>
                    <div className="device-links mx-auto">
                        <a href="#">Learn more {'>'}</a>
                        <a href="#">Buy {'>'}</a>
                    </div>
                    <img src={ipad} alt="ipad"/>
                </Col>
            </Row>
            <Row className="p-2 device-nth-row">
                <Col className="device-airpods">
                    <h1>AirPods</h1>
                    <h2>Share the joy.</h2>
                    <div className="device-links mx-auto">
                        <a className="mx-auto" href="#">Shop {'>'}</a>
                    </div>
                    <img src={airpods} alt="airpods"/>
                </Col>
                <Col className="device-watch">
                    <h1>Apple Watch</h1>
                    <h2>Adventure Awaits.</h2>
                    <div className="device-links mx-auto">
                        <a href="#">Learn more {'>'}</a>
                        <a href="#">Buy {'>'}</a>
                    </div>
                    <img src={watch} alt="apple watch"/>
                </Col>
            </Row>
        </Container>
    );
}

export default Devices;
