import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { Nav } from "react-bootstrap";

function Footer() {
  return (
    <Nav className="justify-content-center bg-dark w-100" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          <FontAwesomeIcon icon={faApple} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          Shop and Learn
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          Services
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          Apple Store
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          For Business
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          For Education
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          For Healthcare
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          For Government
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          Only on Apple
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-white">
          About Apple
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Footer;
