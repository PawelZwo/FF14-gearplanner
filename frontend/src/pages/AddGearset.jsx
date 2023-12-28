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
/* import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert"; */

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

  const [showForm, setShowForm] = useState(false);

  const { data: jobs } = useFetchGet("api/jobs/");

  const [formData, setFormData] = useState({
    gearset_name: "",
    job: null,
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChosenJob = (e) => {
    if (+e.target.value != 0) {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  };

  return (
    <>
      <PageTitle pageName="Create a gearset" />
      {gearPending && <Loading />}
      {gearError && <ErrorMessage error={gearError} variant="danger" />}
      {gearData && (
        <Form>
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
                        {gearData &&
                          gearData
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
                        {gearData &&
                          gearData
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
                        {gearData &&
                          gearData
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
                        {gearData &&
                          gearData
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
                        {gearData &&
                          gearData
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
                        {gearData &&
                          gearData
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
                        {gearData &&
                          gearData
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
                        {gearData &&
                          gearData
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
                        {gearData &&
                          gearData
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
                        {gearData &&
                          gearData
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
                        {gearData &&
                          gearData
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
                        {gearData &&
                          gearData
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

            <Col sm={6}></Col>
          </Row>
        </Form>
      )}
    </>
  );
}
