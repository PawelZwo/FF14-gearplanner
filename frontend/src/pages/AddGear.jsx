// React
import { useState } from "react";

// React-Router
import { Link } from "react-router-dom";

// Custom hooks
import { useFetchGet } from "../hooks/useFetchGet";
import { useFetchOptions } from "../hooks/useFetchOptions";

// Project's small components
import PageTitle from "../small_components/PageTitle";
import Loading from "../small_components/Loading";

// React-Bootstrap
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function AddGear() {
  const { dataOptions } = useFetchOptions("api/gears/options/");
  const { data: costs } = useFetchGet("api/costs/");
  const { data: jobs, isPending: jobsPending } = useFetchGet("api/jobs/");

  const [dataPost, setDataPost] = useState(null);
  const [isPendingPost, setIsPendingPost] = useState(true);
  const [errorPost, setErrorPost] = useState(null);

  const [formData, setFormData] = useState({
    gear_name: "",
    slug: "",
    category: null,
    acquisition: "",
    added_in_patch: null,
    slot: null,
    cost: "",
    job: [],
    ff14_db_index: "",
    ff14_db_icon: "",
    item_level: null,
    required_level: null,
    physical_dmg: null,
    magical_dmg: null,
    auto_attack: null,
    delay: null,
    block_strength: null,
    block_rate: null,
    defense: null,
    magic_defense: null,
    vitality: null,
    strength: null,
    dexterity: null,
    tenacity: null,
    intelligence: null,
    mind: null,
    piety: null,
    critical_rate: null,
    direct_hit: null,
    determination: null,
    skill_speed: null,
    spell_speed: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name !== "job") {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    let updatedJobArray;

    if (checked) {
      updatedJobArray = [...formData.job, value];
    } else {
      updatedJobArray = formData.job.filter((job) => job !== value);
    }

    setFormData((prevState) => ({
      ...prevState,
      job: updatedJobArray.map((str) => parseInt(str)),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetchData("api/gears/add/", formData);
  };

  const fetchData = async (endpoint, objData) => {
    setIsPendingPost(true);
    const postData = {
      method: "POST",
      body: JSON.stringify(objData),
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await fetch(
        "http://localhost:8000/" + endpoint,
        postData
      );
      if (!response.ok) throw new Error(response.statusText);
      const json = await response.json();
      setIsPendingPost(false);
      setDataPost(json);
      setErrorPost(null);
    } catch (error) {
      setErrorPost(`Could not Fetch Data (${error} )`);
      setIsPendingPost(false);
    }
  };

  return (
    <>
      {dataPost && (
        <Alert variant="primary">
          Done! {dataPost.gear_name} has been created! CLick{" "}
          <Link to={`/gear/${dataPost.slug}`}>
            <strong> HERE</strong>
          </Link>{" "}
          to view it.
        </Alert>
      )}
      {dataPost && console.log(dataPost)}
      <PageTitle pageName="Add gear" />

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={8}>
            <Form.Group className="mb10" controlId="formGearName">
              <FloatingLabel
                controlId="floatingGearName"
                label="Name"
                className="form__input_text"
              >
                <Form.Control
                  type="text"
                  placeholder=" "
                  required
                  name="gear_name"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
              <Form.Text style={{ color: "white" }}>
                Enter <strong>unique</strong> name for this gear piece.
              </Form.Text>
            </Form.Group>
          </Col>

          <Col sm={4}>
            <Form.Group className="mb10" controlId="formGearItemLevel">
              <FloatingLabel
                controlId="floatingGearItemLevel"
                label="Item level"
                className="form__input_text"
              >
                <Form.Control
                  type="number"
                  min="0"
                  max="665"
                  placeholder=" "
                  required
                  name="item_level"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <Form.Group className="mb10" controlId="formGearRequiredLevel">
              <FloatingLabel
                controlId="floatingGearRequiredLevel"
                label="Required level"
                className="form__input_text"
              >
                <Form.Control
                  type="number"
                  min="1"
                  max="120"
                  placeholder=" "
                  required
                  name="required_level"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col sm={4}>
            <Form.Group className="mb10" controlId="formGearIconUrl">
              <FloatingLabel
                controlId="floatingGearIconUrl"
                label="Icon url"
                className="form__input_text"
              >
                <Form.Control
                  type="text"
                  placeholder=" "
                  required
                  name="ff14_db_icon"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
              <Form.Text style={{ color: "white" }}>
                Enter gear's icon url (what's after <strong>itemicon/</strong>{" "}
                in URL when inspecting icon on Lodestone).
              </Form.Text>
            </Form.Group>
          </Col>

          <Col sm={4}>
            <Form.Group className="mb10" controlId="formGearDBIndex">
              <FloatingLabel
                controlId="floatingGearDBIndex"
                label="FF14 DB index"
                className="form__input_text"
              >
                <Form.Control
                  type="text"
                  placeholder=" "
                  required
                  name="ff14_db_index"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
              <Form.Text style={{ color: "white" }}>
                Enter gear's Lodestone database index (what's after{" "}
                <strong>db/item/</strong> in URL).
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <Form.Group className="mb10" controlId="formGearPatch">
              <FloatingLabel
                controlId="floatingGearPatch"
                label="Patch"
                className="form__input_text"
              >
                <Form.Select
                  required
                  aria-label="Gear patch select"
                  name="added_in_patch"
                  onChange={handleInputChange}
                >
                  <option>...</option>
                  {dataOptions &&
                    dataOptions.added_in_patch.choices.map((item) => (
                      <option value={item.value} key={item.value}>
                        {item.display_name}
                      </option>
                    ))}
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col sm={4}>
            <Form.Group className="mb10" controlId="formGearSlot">
              <FloatingLabel
                controlId="floatingGearSlot"
                label="Slot"
                className="form__input_text"
              >
                <Form.Select
                  required
                  aria-label="Gear slot select"
                  name="slot"
                  onChange={handleInputChange}
                >
                  <option>...</option>
                  {dataOptions &&
                    dataOptions.slot.choices.map((item) => (
                      <option value={item.value} key={item.value}>
                        {item.display_name}
                      </option>
                    ))}
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col sm={4}>
            <Form.Group className="mb10" controlId="formGearCategory">
              <FloatingLabel
                controlId="floatingGearCategory"
                label="Category"
                className="form__input_text"
              >
                <Form.Select
                  required
                  aria-label="Gear category select"
                  name="category"
                  onChange={handleInputChange}
                >
                  <option>...</option>
                  {dataOptions &&
                    dataOptions.category.choices.map((item) => (
                      <option value={item.value} key={item.value}>
                        {item.display_name}
                      </option>
                    ))}
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <Form.Group className="mb10" controlId="formGearAcquisition">
              <FloatingLabel
                controlId="floatingGearAcquisition"
                label="Acquisition"
                className="form__input_text"
              >
                <Form.Select
                  required
                  aria-label="Gear acquisition select"
                  name="acquisition"
                  onChange={handleInputChange}
                >
                  <option>...</option>
                  {dataOptions &&
                    dataOptions.acquisition.choices.map((item) => (
                      <option value={item.value} key={item.value}>
                        {item.display_name}
                      </option>
                    ))}
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col sm={4}>
            <Form.Group className="mb10" controlId="formGearCost">
              <FloatingLabel
                controlId="floatingGearCost"
                label="Cost"
                className="form__input_text"
              >
                <Form.Select
                  required
                  aria-label="Gear cost select"
                  name="cost"
                  onChange={handleInputChange}
                >
                  <option>...</option>
                  {costs &&
                    costs.map((item) => (
                      <option value={item.id} key={item.id}>
                        {item.cost_name}
                      </option>
                    ))}
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Form.Group className="mb10" controlId="formGearJobs">
            <strong>Jobs</strong>
            <br />
            {jobs && (
              <div>
                {jobs.map((item) => (
                  <Form.Check
                    key={item.id}
                    inline
                    label={item.job_name}
                    type="checkbox"
                    name="job"
                    value={item.id}
                    onChange={handleCheckboxChange}
                    id={item.job_name}
                  />
                ))}
              </div>
            )}
            {jobsPending && <Loading />}
          </Form.Group>
        </Row>

        <Row>
          <strong className="mb5">Attack related stats</strong>

          <Col sm={3}>
            <Form.Group className="mb10" controlId="formGearPhysicalDamage">
              <FloatingLabel
                controlId="floatingGearPhysicalDamage"
                label="Physical damage"
                className="form__input_text"
              >
                <Form.Control
                  type="number"
                  min="0"
                  max="300"
                  placeholder=" "
                  required
                  name="physical_dmg"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col sm={3}>
            <Form.Group className="mb10" controlId="formGearMagicalDamage">
              <FloatingLabel
                controlId="floatingGearMagicalDamage"
                label="Magical damage"
                className="form__input_text"
              >
                <Form.Control
                  type="number"
                  min="0"
                  max="300"
                  placeholder=" "
                  required
                  name="magical_dmg"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col sm={3}>
            <Form.Group className="mb10" controlId="formGearAutoAttack">
              <FloatingLabel
                controlId="floatingGearAutoAttack"
                label="Auto attack"
                className="form__input_text"
              >
                <Form.Control
                  type="text"
                  placeholder=" "
                  required
                  name="auto_attack"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col sm={3}>
            <Form.Group className="mb10" controlId="formGearDelay">
              <FloatingLabel
                controlId="floatingGearDelay"
                label="Delay"
                className="form__input_text"
              >
                <Form.Control
                  type="text"
                  placeholder=" "
                  required
                  name="delay"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
              <Form.Text style={{ color: "white" }}>
                Enter gear's delay (in seconds).
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <strong className="mb5">Defense related stats</strong>
          <Col sm={3}>
            <Form.Group className="mb10" controlId="formGearBlockStrength">
              <FloatingLabel
                controlId="floatingGearBlockStrength"
                label="Block strength"
                className="form__input_text"
              >
                <Form.Control
                  type="number"
                  min="0"
                  max="2000"
                  placeholder=" "
                  required
                  name="block_strength"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col sm={3}>
            <Form.Group className="mb10" controlId="formGearBlockRate">
              <FloatingLabel
                controlId="floatingGearBlockRate"
                label="Block rate"
                className="form__input_text"
              >
                <Form.Control
                  type="number"
                  min="0"
                  max="2000"
                  placeholder=" "
                  required
                  name="block_rate"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col sm={3}>
            <Form.Group className="mb10" controlId="formGearDefense">
              <FloatingLabel
                controlId="floatingGearDefense"
                label="Defense"
                className="form__input_text"
              >
                <Form.Control
                  type="number"
                  min="0"
                  max="2000"
                  placeholder=" "
                  required
                  name="defense"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col sm={3}>
            <Form.Group className="mb10" controlId="formGearMagicDefense">
              <FloatingLabel
                controlId="floatingGearMagicDefense"
                label="Magic defense"
                className="form__input_text"
              >
                <Form.Control
                  type="number"
                  min="0"
                  max="2000"
                  placeholder=" "
                  required
                  name="magic_defense"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <strong className="mb5">Main stats</strong>
          <Col sm={3}>
            <Form.Group className="mb10" controlId="formGearVitality">
              <FloatingLabel
                controlId="floatingGearVitality"
                label="Vitality"
                className="form__input_text"
              >
                <Form.Control
                  type="number"
                  min="0"
                  max="1000"
                  placeholder=" "
                  required
                  name="vitality"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col sm={3}>
            <Form.Group className="mb10" controlId="formGearStrength">
              <FloatingLabel
                controlId="floatingGearStrength"
                label="Strength"
                className="form__input_text"
              >
                <Form.Control
                  type="number"
                  min="0"
                  max="1000"
                  placeholder=" "
                  required
                  name="strength"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col sm={3}>
            <Form.Group className="mb10" controlId="formGearDexterity">
              <FloatingLabel
                controlId="floatingGearDexterity"
                label="Dexterity"
                className="form__input_text"
              >
                <Form.Control
                  type="number"
                  min="0"
                  max="1000"
                  placeholder=" "
                  required
                  name="dexterity"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col sm={3}>
            <Form.Group className="mb10" controlId="formGearIntelligence">
              <FloatingLabel
                controlId="floatingGearIntelligence"
                label="Intelligence"
                className="form__input_text"
              >
                <Form.Control
                  type="number"
                  min="0"
                  max="1000"
                  placeholder=" "
                  required
                  name="intelligence"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col sm={3}>
            <Form.Group className="mb10" controlId="formGearMind">
              <FloatingLabel
                controlId="floatingGearMind"
                label="Mind"
                className="form__input_text"
              >
                <Form.Control
                  type="number"
                  min="0"
                  max="1000"
                  placeholder=" "
                  required
                  name="mind"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <strong className="mb5">Secondary stats</strong>
          <Col sm={3}>
            <Form.Group className="mb10" controlId="formGearTenacity">
              <FloatingLabel
                controlId="floatingGearTenacity"
                label="Tenacity"
                className="form__input_text"
              >
                <Form.Control
                  type="number"
                  min="0"
                  max="1000"
                  placeholder=" "
                  required
                  name="tenacity"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col sm={3}>
            <Form.Group className="mb10" controlId="formGearPiety">
              <FloatingLabel
                controlId="floatingGearPiety"
                label="Piety"
                className="form__input_text"
              >
                <Form.Control
                  type="number"
                  min="0"
                  max="1000"
                  placeholder=" "
                  required
                  name="piety"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col sm={3}>
            <Form.Group className="mb10" controlId="formGearCriticalRate">
              <FloatingLabel
                controlId="floatingGearCriticalRate"
                label="Critical rate"
                className="form__input_text"
              >
                <Form.Control
                  type="number"
                  min="0"
                  max="1000"
                  placeholder=" "
                  required
                  name="critical_rate"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col sm={3}>
            <Form.Group className="mb10" controlId="formGearDirectHit">
              <FloatingLabel
                controlId="floatingGearDirectHit"
                label="Direct hit"
                className="form__input_text"
              >
                <Form.Control
                  type="number"
                  min="0"
                  max="1000"
                  placeholder=" "
                  required
                  name="direct_hit"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col sm={3}>
            <Form.Group className="mb10" controlId="formGearDetermination">
              <FloatingLabel
                controlId="floatingGearDetermination"
                label="Determination"
                className="form__input_text"
              >
                <Form.Control
                  type="number"
                  min="0"
                  max="1000"
                  placeholder=" "
                  required
                  name="determination"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col sm={3}>
            <Form.Group className="mb10" controlId="formGearSkillSpeed">
              <FloatingLabel
                controlId="floatingGearSkillSpeed"
                label="Skill speed"
                className="form__input_text"
              >
                <Form.Control
                  type="number"
                  min="0"
                  max="1000"
                  placeholder=" "
                  required
                  name="skill_speed"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col sm={3}>
            <Form.Group className="mb10" controlId="formGearSpellSpeed">
              <FloatingLabel
                controlId="floatingGearSpellSpeed"
                label="Spell speed"
                className="form__input_text"
              >
                <Form.Control
                  type="number"
                  min="0"
                  max="1000"
                  placeholder=" "
                  required
                  name="spell_speed"
                  onInput={handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <Button
              as="input"
              type="submit"
              value="Submit"
              size="sm"
              variant="outline-primary"
              className="mt10"
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
              className="mt10"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
}
