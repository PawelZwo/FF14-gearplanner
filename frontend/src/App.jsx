// React imports
import { useEffect } from "react";

// React-router imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS imports
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

// React-Bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Project's components imports
import Home from "./components/Home";
import RightSide from "./components/RightSide";
import AllGear from "./pages/AllGear";
import Dpsgear from "./pages/Dpsgear";
import Healergear from "./pages/Healergear";
import Tankgear from "./pages/Tankgear";
import Job from "./pages/Job";
import Race from "./pages/Race";
import Cost from "./pages/Cost";
import Footer from "./components/Footer";
// import NewsFeed from "./components/NewsFeed";
import LeftSide from "./components/LeftSide";

export default function App() {
  useEffect(() => {
    document.title = "Final Fantasy 14 Gearplanner";
  }, []);

  return (
    <BrowserRouter>
      <Container style={{ marginTop: "2vh" }}>
        <Row style={{ marginBottom: "4vh" }}>
          <Col />
          <Col sm={8}>
            <div className="header">Final Fantasy 14 Gearset Planner</div>
          </Col>
          <Col />
        </Row>
        <Row>
          <Col sm={2}>
            {/* <NewsFeed/> */}
            <LeftSide />
          </Col>
          <Col sm={8}>
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="gear/" element={<AllGear />} />
              <Route path="dpsgear/" element={<Dpsgear />} />
              <Route path="healergear/" element={<Healergear />} />
              <Route path="tankgear/" element={<Tankgear />} />
              <Route path="jobs/" element={<Job />} />
              <Route path="races/" element={<Race />} />
              <Route path="costs/" element={<Cost />} />
            </Routes>
          </Col>
          <Col sm={2}>
            <RightSide />
          </Col>
        </Row>
        <Row style={{ marginBottom: 0, marginTop: "4vh" }}>
          <Col></Col>
          <Col sm={8}>
            <Footer />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}
