// React-Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// React-Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Project's components
import SideBar from "./components/SideBar";
import Footer from "./small_components/Footer";

// Project's small components
import Banner from "./small_components/Banner";

// Project's pages
import Home from "./pages/Home";
import Gear from "./pages/Gear";
import Job from "./pages/Job";
import Race from "./pages/Race";
import Cost from "./pages/Cost";
import PvpCalc from "./pages/PvpCalc";
import NotFound from "./pages/NotFound";
import GearDetails from "./pages/GearDetails";
import AddGear from "./pages/AddGear";

export default function App() {
  return (
    <BrowserRouter>
      <Container style={{ marginTop: "2vh" }}>
        <Row style={{ marginBottom: "4vh" }}>
          <Col sm={1} />
          <Col sm={8}>
            <div className="header">
              <strong>FINAL&nbsp;FANTASY&nbsp;XIV Gearset&nbsp;Planner</strong>
            </div>
          </Col>
          <Col sm={2} />
        </Row>
        <Row>
          <Col sm={1} />
          <Col sm={8}>
            <Routes>
              <Route path="/gear" element={<Gear />} />
              <Route path="/gear/:gearSlug" element={<GearDetails />} />
              <Route path="/costs" element={<Cost />} />
              <Route path="/add-gear" element={<AddGear />} />
              <Route element={<Banner />}>
                <Route path="/" element={<Home />} />
                <Route path="/jobs" element={<Job />} />
                <Route path="/races" element={<Race />} />
                <Route path="/pvp-series" element={<PvpCalc />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Col>
          <Col sm={2}>
            <SideBar />
          </Col>
        </Row>
        <Row style={{ marginBottom: 0, marginTop: "4vh" }}>
          <Col sm={1} />
          <Col sm={8}>
            <Footer />
          </Col>
          <Col sm={2} />
        </Row>
      </Container>
    </BrowserRouter>
  );
}
