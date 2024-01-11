// React
import { useState } from "react";

// Custom hooks
import { useFetchGet } from "../hooks/useFetchGet";

// Project's components
import Loading from "../small_components/Loading";
import ErrorMessage from "../small_components/ErrorMessage";

// Project's small components
import PageTitle from "../small_components/PageTitle";

// React-Bootstrap
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

/* TODO:
  - check the formData inputs;
  - handle POST fetch.
*/

export default function AddGearset() {
  const {
    data: gearData,
    isPending: gearPending,
    error: gearError,
  } = useFetchGet("api/gears/list/");

  const [filteredGearData, setFilteredGearData] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [displayedJobName, setDisplayedJobName] = useState("");

  const { data: jobs } = useFetchGet("api/jobs/");

  // gearData && console.log("gearData: ", gearData);
  // jobs && console.log("jobs: ", jobs);

  const [formData, setFormData] = useState({
    gearset_name: "",
    job: null,
    job_name: "",
    weapon: null,
    shield: null,
    head: null,
    body: null,
    legs: null,
    hands: null,
    feet: null,
    earring: null,
    necklace: null,
    bracelet: null,
    left_ring: null,
    right_ring: null,
  });

  const iconStyle = {
    padding: "5px",
    border: "2px solid #658bf5",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "gearset_name") {
      setFormData({ ...formData, [name]: value });
      console.log(formData);
    } else if (name !== "gearset_name") {
      setFormData({ ...formData, [name]: parseInt(value) });
      console.log(formData);
    }
  };

  const handleChosenJob = (e) => {
    let targetJob = parseInt(e.target.value);
    if (targetJob !== 0) {
      setShowForm(true);
      let jobHeader = jobs
        .filter((item) => item.id === targetJob)
        .map((job) => job.job_name);
      setDisplayedJobName(jobHeader[0]);
      let filteredData = gearData.filter((gearPiece) =>
        gearPiece.job.includes(targetJob)
      );
      setFilteredGearData(filteredData);
      setFormData({ ...formData, job: targetJob, job_name: jobHeader[0] });
    } else {
      setShowForm(false);
      // setFormData({
      //   gearset_name: "",
      //   job: null,
      //   job_name: "",
      //   weapon: null,
      //   shield: null,
      //   head: null,
      //   body: null,
      //   legs: null,
      //   hands: null,
      //   feet: null,
      //   earring: null,
      //   necklace: null,
      //   bracelet: null,
      //   left_ring: null,
      //   right_ring: null,
      // });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    const isValid =
      Object.entries(formData).every(([key, value]) => {
        if (key === "gearset_name") {
          return typeof value === "string" && value !== "";
        } else if (key === "shield") {
          return value === null || !isNaN(value);
        } else if (key === "left_ring" || key === "right_ring") {
          return value !== null && !isNaN(value) && value !== "";
        } else {
          return value !== null && !isNaN(value);
        }
      }) && formData.left_ring !== formData.right_ring;

    if (isValid) {
      // Proceed with your action, the form data is valid
      console.log("Form data is VALID:", formData);
    } else {
      // Handle the case when the form data is invalid
      console.log("Form data is INVALID:", formData);
    }
  };

  return (
    <>
      <PageTitle pageName="Create a gearset" />

      {gearPending && <Loading />}

      {gearError && <ErrorMessage error={gearError} variant="danger" />}

      {gearData && (
        <Form onSubmit={handleFormSubmit}>
          <Row>
            <Col sm={6}>
              <Form.Group className="mb10" controlId="formGearsetName">
                <FloatingLabel
                  controlId="floatingGearsetNameLabel"
                  label="Name"
                  className="form__input_text"
                >
                  <Form.Control
                    type="text"
                    placeholder=" "
                    required
                    name="gearset_name"
                    onChange={handleInputChange}
                  />
                </FloatingLabel>
                <Form.Text style={{ color: "white" }}>
                  Enter <strong>unique</strong> name for this gearset.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb10 form__input_w80" controlId="formJob">
                <FloatingLabel
                  controlId="floatingJobLabel"
                  label="Job"
                  className="form__input_text"
                >
                  <Form.Select
                    required
                    aria-label="Job select"
                    name="job"
                    onChange={handleChosenJob}
                  >
                    <option value={0}>...</option>
                    {jobs &&
                      jobs.map((item) => (
                        <option value={item.id} key={item.id}>
                          {item.job_name}
                        </option>
                      ))}
                  </Form.Select>
                </FloatingLabel>
                <Form.Text style={{ color: "white" }}>
                  Choose a job for this gearset.
                </Form.Text>
              </Form.Group>

              {showForm && (
                <>
                  <Form.Group
                    className="mb10 form__input_w80"
                    controlId="formWeapon"
                  >
                    <FloatingLabel
                      controlId="floatingWeaponLabel"
                      label="Weapon"
                      className="form__input_text"
                    >
                      <Form.Select
                        required
                        aria-label="Weapon select"
                        name="weapon"
                        onChange={handleInputChange}
                      >
                        <option>...</option>
                        {filteredGearData
                          .filter((gear) => gear.slot === "Weapon")
                          .map((item) => (
                            <option value={item.id} key={item.id}>
                              {item.gear_name}
                            </option>
                          ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group
                    className="mb10 form__input_w80"
                    controlId="formShield"
                  >
                    <FloatingLabel
                      controlId="floatingShieldLabel"
                      label="Shield"
                      className="form__input_text"
                    >
                      <Form.Select
                        required
                        aria-label="Shield select"
                        name="shield"
                        onChange={handleInputChange}
                      >
                        <option>...</option>
                        {filteredGearData
                          .filter((gear) => gear.slot === "Shield")
                          .map((item) => (
                            <option value={item.id} key={item.id}>
                              {item.gear_name}
                            </option>
                          ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group
                    className="mb10 form__input_w80"
                    controlId="formHead"
                  >
                    <FloatingLabel
                      controlId="floatingHeadLabel"
                      label="Head"
                      className="form__input_text"
                    >
                      <Form.Select
                        required
                        aria-label="Head select"
                        name="head"
                        onChange={handleInputChange}
                      >
                        <option>...</option>
                        {filteredGearData
                          .filter((gear) => gear.slot === "Head")
                          .map((item) => (
                            <option value={item.id} key={item.id}>
                              {item.gear_name}
                            </option>
                          ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group
                    className="mb10 form__input_w80"
                    controlId="formBody"
                  >
                    <FloatingLabel
                      controlId="floatingBodyLabel"
                      label="Body"
                      className="form__input_text"
                    >
                      <Form.Select
                        required
                        aria-label="Body select"
                        name="body"
                        onChange={handleInputChange}
                      >
                        <option>...</option>
                        {filteredGearData
                          .filter((gear) => gear.slot === "Body")
                          .map((item) => (
                            <option value={item.id} key={item.id}>
                              {item.gear_name}
                            </option>
                          ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group
                    className="mb10 form__input_w80"
                    controlId="formHands"
                  >
                    <FloatingLabel
                      controlId="floatingHandsLabel"
                      label="Hands"
                      className="form__input_text"
                    >
                      <Form.Select
                        required
                        aria-label="Hands select"
                        name="hands"
                        onChange={handleInputChange}
                      >
                        <option>...</option>
                        {filteredGearData
                          .filter((gear) => gear.slot === "Hands")
                          .map((item) => (
                            <option value={item.id} key={item.id}>
                              {item.gear_name}
                            </option>
                          ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group
                    className="mb10 form__input_w80"
                    controlId="formLegs"
                  >
                    <FloatingLabel
                      controlId="floatingLegsLabel"
                      label="Legs"
                      className="form__input_text"
                    >
                      <Form.Select
                        required
                        aria-label="Legs select"
                        name="legs"
                        onChange={handleInputChange}
                      >
                        <option>...</option>
                        {filteredGearData
                          .filter((gear) => gear.slot === "Legs")
                          .map((item) => (
                            <option value={item.id} key={item.id}>
                              {item.gear_name}
                            </option>
                          ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group
                    className="mb10 form__input_w80"
                    controlId="formFeet"
                  >
                    <FloatingLabel
                      controlId="floatingFeetLabel"
                      label="Feet"
                      className="form__input_text"
                    >
                      <Form.Select
                        required
                        aria-label="Feet select"
                        name="feet"
                        onChange={handleInputChange}
                      >
                        <option>...</option>
                        {filteredGearData
                          .filter((gear) => gear.slot === "Feet")
                          .map((item) => (
                            <option value={item.id} key={item.id}>
                              {item.gear_name}
                            </option>
                          ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group
                    className="mb10 form__input_w80"
                    controlId="formEarring"
                  >
                    <FloatingLabel
                      controlId="floatingEarringLabel"
                      label="Earring"
                      className="form__input_text"
                    >
                      <Form.Select
                        required
                        aria-label="Earring select"
                        name="earring"
                        onChange={handleInputChange}
                      >
                        <option>...</option>
                        {filteredGearData
                          .filter((gear) => gear.slot === "Earring")
                          .map((item) => (
                            <option value={item.id} key={item.id}>
                              {item.gear_name}
                            </option>
                          ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group
                    className="mb10 form__input_w80"
                    controlId="formNecklace"
                  >
                    <FloatingLabel
                      controlId="floatingNecklaceLabel"
                      label="Necklace"
                      className="form__input_text"
                    >
                      <Form.Select
                        required
                        aria-label="Necklace select"
                        name="necklace"
                        onChange={handleInputChange}
                      >
                        <option>...</option>
                        {filteredGearData
                          .filter((gear) => gear.slot === "Necklace")
                          .map((item) => (
                            <option value={item.id} key={item.id}>
                              {item.gear_name}
                            </option>
                          ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group
                    className="mb10 form__input_w80"
                    controlId="formBracelet"
                  >
                    <FloatingLabel
                      controlId="floatingBraceletLabel"
                      label="Bracelet"
                      className="form__input_text"
                    >
                      <Form.Select
                        required
                        aria-label="Bracelet select"
                        name="bracelet"
                        onChange={handleInputChange}
                      >
                        <option>...</option>
                        {filteredGearData
                          .filter((gear) => gear.slot === "Bracelet")
                          .map((item) => (
                            <option value={item.id} key={item.id}>
                              {item.gear_name}
                            </option>
                          ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group
                    className="mb10 form__input_w80"
                    controlId="formLeftRing"
                  >
                    <FloatingLabel
                      controlId="floatingLeftRingLabel"
                      label="Left ring"
                      className="form__input_text"
                    >
                      <Form.Select
                        required
                        aria-label="Left ring select"
                        name="left_ring"
                        onChange={handleInputChange}
                      >
                        <option>...</option>
                        {filteredGearData
                          .filter((gear) => gear.slot === "Ring")
                          .map((item) => (
                            <option value={item.id} key={item.id}>
                              {item.gear_name}
                            </option>
                          ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group
                    className="mb10 form__input_w80"
                    controlId="formRightRing"
                  >
                    <FloatingLabel
                      controlId="floatingRightRingLabel"
                      label="Right ring"
                      className="form__input_text"
                    >
                      <Form.Select
                        required
                        aria-label="Right ring select"
                        name="right_ring"
                        onChange={handleInputChange}
                      >
                        <option>...</option>
                        {filteredGearData
                          .filter((gear) => gear.slot === "Ring")
                          .map((item) => (
                            <option value={item.id} key={item.id}>
                              {item.gear_name}
                            </option>
                          ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>
                </>
              )}
            </Col>

            <Col sm={6}>
              {showForm && (
                <>
                  <div className="job-header">
                    <strong>{displayedJobName}</strong>
                  </div>
                  <div className="items-rows">
                    <Stack direction="horizontal" gap={2}>
                      <Image
                        src={
                          formData.weapon === null ||
                          formData.weapon === undefined
                            ? "/media/slots_icons/mainhand.png"
                            : `https://xivapi.com/i/${
                                gearData.filter(
                                  (item) => item.id === formData.weapon
                                )[0]?.xiv_api_icon
                              }_hr1.png`
                        }
                        width={70}
                        height={70}
                        className="d-inline-block align-top"
                        alt="Main hand slot icon"
                        style={iconStyle}
                      />
                      <Image
                        src={
                          formData.shield === null ||
                          formData.shield === undefined
                            ? "/media/slots_icons/offhand.png"
                            : `https://xivapi.com/i/${
                                gearData.filter(
                                  (item) => item.id === formData.shield
                                )[0]?.xiv_api_icon
                              }_hr1.png`
                        }
                        width={70}
                        height={70}
                        className="d-inline-block align-top left-side-slots"
                        alt="Shield slot icon"
                        style={iconStyle}
                      />
                    </Stack>
                  </div>

                  <div className="mt20 items-rows">
                    <Stack direction="horizontal" gap={1}>
                      <Image
                        src={
                          formData.head === null || formData.head === undefined
                            ? "/media/slots_icons/head.png"
                            : `https://xivapi.com/i/${
                                gearData.filter(
                                  (item) => item.id === formData.head
                                )[0]?.xiv_api_icon
                              }_hr1.png`
                        }
                        width={70}
                        height={70}
                        className="d-inline-block align-top"
                        alt="Head slot icon"
                        style={iconStyle}
                      />
                      <Image
                        src={
                          formData.earring === null ||
                          formData.earring === undefined
                            ? "/media/slots_icons/ear.png"
                            : `https://xivapi.com/i/${
                                gearData.filter(
                                  (item) => item.id === formData.earring
                                )[0]?.xiv_api_icon
                              }_hr1.png`
                        }
                        width={70}
                        height={70}
                        className="d-inline-block align-top left-side-slots"
                        alt="Earring slot icon"
                        style={iconStyle}
                      />
                    </Stack>
                  </div>

                  <div className="mt20 items-rows">
                    <Stack direction="horizontal" gap={1}>
                      <Image
                        src={
                          formData.body === null || formData.body === undefined
                            ? "/media/slots_icons/body.png"
                            : `https://xivapi.com/i/${
                                gearData.filter(
                                  (item) => item.id === formData.body
                                )[0]?.xiv_api_icon
                              }_hr1.png`
                        }
                        width={70}
                        height={70}
                        className="d-inline-block align-top "
                        alt="Body slot icon"
                        style={iconStyle}
                      />

                      <Image
                        src={
                          formData.necklace === null ||
                          formData.necklace === undefined
                            ? "/media/slots_icons/neck.png"
                            : `https://xivapi.com/i/${
                                gearData.filter(
                                  (item) => item.id === formData.necklace
                                )[0]?.xiv_api_icon
                              }_hr1.png`
                        }
                        width={70}
                        height={70}
                        className="d-inline-block align-top left-side-slots"
                        alt="Necklace slot icon"
                        style={iconStyle}
                      />
                    </Stack>
                  </div>

                  <div className="mt20 items-rows">
                    <Stack direction="horizontal" gap={1}>
                      <Image
                        src={
                          formData.hands === null ||
                          formData.hands === undefined
                            ? "/media/slots_icons/hands.png"
                            : `https://xivapi.com/i/${
                                gearData.filter(
                                  (item) => item.id === formData.hands
                                )[0]?.xiv_api_icon
                              }_hr1.png`
                        }
                        width={70}
                        height={70}
                        className="d-inline-block align-top "
                        alt="Hands slot icon"
                        style={iconStyle}
                      />
                      <Image
                        src={
                          formData.bracelet === null ||
                          formData.bracelet === undefined
                            ? "/media/slots_icons/wrist.png"
                            : `https://xivapi.com/i/${
                                gearData.filter(
                                  (item) => item.id === formData.bracelet
                                )[0]?.xiv_api_icon
                              }_hr1.png`
                        }
                        width={70}
                        height={70}
                        className="d-inline-block align-top left-side-slots"
                        alt="Bracelet slot icon"
                        style={iconStyle}
                      />
                    </Stack>
                  </div>

                  <div className="mt20 items-rows">
                    <Stack direction="horizontal" gap={1}>
                      <Image
                        src={
                          formData.legs === null || formData.legs === undefined
                            ? "/media/slots_icons/legs.png"
                            : `https://xivapi.com/i/${
                                gearData.filter(
                                  (item) => item.id === formData.legs
                                )[0]?.xiv_api_icon
                              }_hr1.png`
                        }
                        width={70}
                        height={70}
                        className="d-inline-block align-top "
                        alt="Legs slot icon"
                        style={iconStyle}
                      />
                      <Image
                        src={
                          formData.left_ring === null ||
                          formData.left_ring === undefined
                            ? "/media/slots_icons/ring.png"
                            : `https://xivapi.com/i/${
                                gearData.filter(
                                  (item) => item.id === formData.left_ring
                                )[0]?.xiv_api_icon
                              }_hr1.png`
                        }
                        width={70}
                        height={70}
                        className="d-inline-block align-top left-side-slots"
                        alt="Left ring slot icon"
                        style={iconStyle}
                      />
                    </Stack>
                  </div>

                  <div className="mt20 items-rows">
                    <Stack direction="horizontal" gap={1}>
                      <Image
                        src={
                          formData.feet === null || formData.feet === undefined
                            ? "/media/slots_icons/feet.png"
                            : `https://xivapi.com/i/${
                                gearData.filter(
                                  (item) => item.id === formData.feet
                                )[0]?.xiv_api_icon
                              }_hr1.png`
                        }
                        width={70}
                        height={70}
                        className="d-inline-block align-top "
                        alt="Feet slot icon"
                        style={iconStyle}
                      />
                      <Image
                        src={
                          formData.right_ring === null ||
                          formData.right_ring === undefined
                            ? "/media/slots_icons/ring.png"
                            : `https://xivapi.com/i/${
                                gearData.filter(
                                  (item) => item.id === formData.right_ring
                                )[0]?.xiv_api_icon
                              }_hr1.png`
                        }
                        width={70}
                        height={70}
                        className="d-inline-block align-top left-side-slots"
                        alt="Right ring slot icon"
                        style={iconStyle}
                      />
                    </Stack>
                  </div>
                </>
              )}
              <Row style={{ marginTop: "5vh" }}>
                <Col sm={6}>
                  <Button
                    as="input"
                    type="submit"
                    value="Submit"
                    size="sm"
                    variant="outline-primary"
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col sm={6}>
                  <Button
                    as="input"
                    type="reset"
                    value="Reset"
                    size="sm"
                    variant="outline-secondary"
                    style={{ width: "100%" }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      )}
    </>
  );
}
