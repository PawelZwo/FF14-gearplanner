// React-router imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS imports
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// React-Bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Project's components
import RightSide from "./components/RightSide";
import Footer from "./components/Footer";
import LeftSide from "./components/LeftSide";
import Banner from "./components/Banner";

// Project's pages
import Home from "./pages/Home";
import AllGear from "./pages/AllGear";
import Dpsgear from "./pages/Dpsgear";
import Healergear from "./pages/Healergear";
import Tankgear from "./pages/Tankgear";
import Job from "./pages/Job";
import Race from "./pages/Race";
import Cost from "./pages/Cost";
import PvpCalc from "./pages/PvpCalc";
import NotFound from "./pages/NotFound";
import GearDetails from "./pages/GearDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Container style={{ marginTop: "2vh" }}>
        <Row style={{ marginBottom: "4vh" }}>
          <Col sm={10}>
            <div className="header">
              <strong>FINAL&nbsp;FANTASY&nbsp;XIV Gearset&nbsp;Planner</strong>
            </div>
          </Col>
          <Col />
        </Row>
        <Row>
          <Col sm={10}>
            <Routes>
              <Route path="/gear" element={<AllGear />} />
              <Route path="/gear/:gearId" element={<GearDetails />} />
              <Route path="/dpsgear" element={<Dpsgear />} />
              <Route path="/healergear" element={<Healergear />} />
              <Route path="/tankgear" element={<Tankgear />} />
              <Route element={<Banner />}>
                <Route path="/" element={<Home />} />
                <Route path="/jobs" element={<Job />} />
                <Route path="/races" element={<Race />} />
                <Route path="/costs" element={<Cost />} />
                <Route path="/pvp-series" element={<PvpCalc />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Col>
          <Col sm={2}>
            <RightSide />
            <LeftSide />
          </Col>
        </Row>
        <Row style={{ marginBottom: 0, marginTop: "4vh" }}>
          <Col sm={10}>
            <Footer />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}
