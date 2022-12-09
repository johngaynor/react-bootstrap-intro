import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import styles from "./nav.css";

function Navigation() {
  return (
    <Nav
      className="justify-content-center bg-dark w-100 home-nav"
      activeKey="/home"
    >
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          <FontAwesomeIcon icon={faApple} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          Store
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          Mac
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          iPad
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          iPhone
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          Watch
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          AirPods
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          TV & Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          Only on Apple
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          Accessories
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          Support
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          <FontAwesomeIcon icon={faShoppingBag} />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
