// Other imports
import { Link } from "react-router-dom";

// React-Icons imports
import { FaHome } from "react-icons/fa";
import {
  GiAncientSword,
  GiBandana,
  GiBanknote,
  GiAbdominalArmor,
} from "react-icons/gi";

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
        style={{ marginBottom: "10px" }}
      >
        <Container>
          <Navbar.Brand>
            <FaHome
              style={{
                display: "inline-block",
                width: "30",
                height: "30",
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
        style={{ marginBottom: "10px" }}
      >
        <Container>
          <Navbar.Brand>
            <GiAncientSword
              style={{
                display: "inline-block",
                width: "30",
                height: "30",
                alignItems: "center",
              }}
            />
            <Link to="jobs/" className="menu-link">
              Jobs
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
        style={{ marginBottom: "10px" }}
      >
        <Container>
          <Navbar.Brand>
            <GiBandana
              style={{
                display: "inline-block",
                width: "30",
                height: "30",
                alignItems: "center",
              }}
            />
            <Link to="races/" className="menu-link">
              Races
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
        style={{ marginBottom: "10px" }}
      >
        <Container>
          <Navbar.Brand>
            <GiBanknote
              style={{
                display: "inline-block",
                width: "30",
                height: "30",
                alignItems: "center",
              }}
            />
            <Link to="costs/" className="menu-link">
              Gear costs
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
        style={{ marginBottom: "10px" }}
      >
        <Container>
          <Navbar.Brand>
            <GiAbdominalArmor
              style={{
                display: "inline-block",
                width: "30",
                height: "30",
                alignItems: "center",
              }}
            />
            <Link to="gear/" className="menu-link">
              All gear
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
        style={{ marginBottom: "10px" }}
      >
        <Container>
          <Navbar.Brand>
            <img
              src="/media/DpsRole.png"
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
        style={{ marginBottom: "10px" }}
      >
        <Container>
          <Navbar.Brand>
            <img
              src="/media/Healers.png"
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
        style={{ marginBottom: "10px" }}
      >
        <Container>
          <Navbar.Brand>
            <img
              src="/media/Tanks.png"
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
