// Other imports
import { NavLink } from "react-router-dom";

// React-Icons imports
import { FaHome } from "react-icons/fa";
import {
  GiAncientSword,
  GiBandana,
  GiBanknote,
  GiSwordsEmblem,
} from "react-icons/gi";

// React-Bootstrap imports
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";

export default function RightSide() {
  return (
    <>
      <NavLink to="" className="menu-link">
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
                  width: "35",
                  height: "35",
                  alignItems: "center",
                  marginRight: "0.85rem",
                  marginLeft: "0.25rem",
                }}
              />
              Main page
            </Navbar.Brand>
          </Container>
        </Navbar>
      </NavLink>

      <NavLink to="jobs/" className="menu-link">
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
                  width: "35",
                  height: "35",
                  alignItems: "center",
                  marginRight: "0.85rem",
                  marginLeft: "0.25rem",
                }}
              />
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

      <NavLink to="costs/" className="menu-link">
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
                  width: "35",
                  height: "35",
                  alignItems: "center",
                  marginRight: "0.85rem",
                  marginLeft: "0.25rem",
                }}
              />
              Gear costs
            </Navbar.Brand>
          </Container>
        </Navbar>
      </NavLink>

      <NavLink to="pvp-series/" className="menu-link">
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          className="bg-body-tertiary"
          style={{ marginBottom: "10px" }}
        >
          <Container>
            <Navbar.Brand>
              <GiSwordsEmblem
                style={{
                  display: "inline-block",
                  width: "35",
                  height: "35",
                  alignItems: "center",
                  marginRight: "0.85rem",
                  marginLeft: "0.25rem",
                }}
              />
              PvP series
            </Navbar.Brand>
          </Container>
        </Navbar>
      </NavLink>

      <NavLink to="races/" className="menu-link">
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
                  width: "35",
                  height: "35",
                  alignItems: "center",
                  marginRight: "0.85rem",
                  marginLeft: "0.25rem",
                }}
              />
              Races
            </Navbar.Brand>
          </Container>
        </Navbar>
      </NavLink>
    </>
  );
}
