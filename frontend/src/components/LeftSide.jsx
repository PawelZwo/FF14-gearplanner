// Other imports
import { NavLink } from "react-router-dom";

// React-Icons imports
import { GiAbdominalArmor } from "react-icons/gi";

// React-Bootstrap imports
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function LeftSide() {
  return (
    <>
      <NavLink
        to="gear/"
        className="menu-link"
        // style={({ isActive }) =>
        //   isActive
        //     ? setIsLinkActive({ all: true })
        //     : setIsLinkActive(!isLinkActive)
        // }
      >
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
                  width: "35",
                  height: "35",
                  alignItems: "center",
                  marginRight: "0.85rem",
                  marginLeft: "0.25rem",
                }}
              />
              All gear
            </Navbar.Brand>
          </Container>
        </Navbar>
      </NavLink>

      <NavLink
        to="dpsgear/"
        className="menu-link"
        // style={({ isActive }) =>
        //   isActive
        //     ? setIsLinkActive({ dps: true })
        //     : setIsLinkActive(!isLinkActive)
        // }
      >
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
                style={{ marginRight: "0.5rem" }}
              />
              DPS gear
            </Navbar.Brand>
          </Container>
        </Navbar>
      </NavLink>

      <NavLink
        to="healergear/"
        className="menu-link"
        // style={({ isActive }) =>
        //   isActive
        //     ? setIsLinkActive({ healer: true })
        //     : setIsLinkActive(!isLinkActive)
        // }
      >
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
                style={{ marginRight: "0.5rem" }}
              />
              Healer gear
            </Navbar.Brand>
          </Container>
        </Navbar>
      </NavLink>

      <NavLink
        to="tankgear/"
        className="menu-link"
        // style={({ isActive }) =>
        //   isActive
        //     ? setIsLinkActive({ tank: true })
        //     : setIsLinkActive(!isLinkActive)
        // }
      >
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
                style={{ marginRight: "0.5rem" }}
              />
              Tank gear
            </Navbar.Brand>
          </Container>
        </Navbar>
      </NavLink>
    </>
  );
}
