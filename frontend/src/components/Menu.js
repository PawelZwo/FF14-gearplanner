// Other imports
import { Link } from "react-router-dom";

// React-Icons imports
import { FaHome } from "react-icons/fa";

// React-Bootstrap imports
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Menu() {
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
        sticky="top"
        style={{ marginBottom: "10px" }}
      >
        <Container>
          <Navbar.Brand>
            <FaHome
              style={{
                display: "inline-block",
                width: "25%",
                height: "25%",
                alignItems: "center",
              }}
            />
            <Link to="" className="menu-link">
              Main page
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
        sticky="top"
        style={{ marginBottom: "10px" }}
      >
        <Container>
          <Navbar.Brand>
            <img
              src="/media/DPSRole.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="DPS gear logo"
            />
            <Link to="dpsgear/" className="menu-link">
              DPS gear
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
        sticky="top"
        style={{ marginBottom: "10px" }}
      >
        <Container>
          <Navbar.Brand>
            <img
              src="/media/HealerRole.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="healer gear logo"
            />
            <Link to="healergear/" className="menu-link">
              Healer gear
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
        sticky="top"
        style={{ marginBottom: "10px" }}
      >
        <Container>
          <Navbar.Brand>
            <img
              src="/media/TankRole.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="tank gear logo"
            />
            <Link to="tankgear/" className="menu-link">
              Tank gear
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
