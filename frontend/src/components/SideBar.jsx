// React-Router
import { NavLink } from "react-router-dom";

// React-Icons
import { FaHome } from "react-icons/fa";
import {
  GiAncientSword,
  GiBandana,
  GiBanknote,
  GiSwordsEmblem,
  GiAbdominalArmor,
} from "react-icons/gi";
import { IoMdAdd } from "react-icons/io";

// React-Bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";

export default function SideBar() {
  return (
    <>
      <NavLink to="" className="menu-link">
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          className="bg-body-tertiary mb10"
        >
          <Container>
            <Navbar.Brand>
              <FaHome className="menu-link-icon ml5 mr10" />
              Main page
            </Navbar.Brand>
          </Container>
        </Navbar>
      </NavLink>

      <NavLink to="jobs/" className="menu-link">
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          className="bg-body-tertiary mb10"
        >
          <Container>
            <Navbar.Brand>
              <GiAncientSword className="menu-link-icon ml5 mr10" />
              Jobs{" "}
              <Badge
                pill
                bg="success"
                style={{ marginLeft: "20px", fontSize: "12px" }}
              >
                Updates
              </Badge>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </NavLink>

      <NavLink to="pvp-series/" className="menu-link">
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          className="bg-body-tertiary mb10"
        >
          <Container>
            <Navbar.Brand>
              <GiSwordsEmblem className="menu-link-icon ml5 mr10" />
              PvP series
            </Navbar.Brand>
          </Container>
        </Navbar>
      </NavLink>

      <NavLink to="races/" className="menu-link">
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          className="bg-body-tertiary mb10"
        >
          <Container>
            <Navbar.Brand>
              <GiBandana className="menu-link-icon ml5 mr10" />
              Races
            </Navbar.Brand>
          </Container>
        </Navbar>
      </NavLink>

      <NavLink to="costs/" className="menu-link">
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          className="bg-body-tertiary mb10"
        >
          <Container>
            <Navbar.Brand>
              <GiBanknote className="menu-link-icon ml5 mr10" />
              Gear costs
            </Navbar.Brand>
          </Container>
        </Navbar>
      </NavLink>

      <NavLink to="gear/" className="menu-link">
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          className="bg-body-tertiary mb10"
        >
          <Container>
            <Navbar.Brand>
              <GiAbdominalArmor className="menu-link-icon ml5 mr10" />
              All gear
            </Navbar.Brand>
          </Container>
        </Navbar>
      </NavLink>

      <NavLink to="add-gear/" className="menu-link">
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          className="bg-body-tertiary mb10"
        >
          <Container>
            <Navbar.Brand>
              <IoMdAdd className="menu-link-icon ml5 mr10" />
              Add gear
            </Navbar.Brand>
          </Container>
        </Navbar>
      </NavLink>
    </>
  );
}
