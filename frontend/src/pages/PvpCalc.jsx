// React imports
import { useState } from "react";

// React-Bootstrap imports
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

// Project's small components
import PageTitle from "../components/small_components/PageTitle";

export default function PvpCalc() {
  const seriesExp = {
    1: { exp: 2000, accumulated: 2000 },
    2: { exp: 2000, accumulated: 4000 },
    3: { exp: 2000, accumulated: 6000 },
    4: { exp: 2000, accumulated: 8000 },
    5: { exp: 3000, accumulated: 11000 },
    6: { exp: 3000, accumulated: 14000 },
    7: { exp: 3000, accumulated: 17000 },
    8: { exp: 3000, accumulated: 20000 },
    9: { exp: 3000, accumulated: 23000 },
    10: { exp: 4000, accumulated: 27000 },
    11: { exp: 4000, accumulated: 31000 },
    12: { exp: 4000, accumulated: 35000 },
    13: { exp: 4000, accumulated: 39000 },
    14: { exp: 4000, accumulated: 43000 },
    15: { exp: 5500, accumulated: 48500 },
    16: { exp: 5500, accumulated: 54000 },
    17: { exp: 5500, accumulated: 59500 },
    18: { exp: 5500, accumulated: 65000 },
    19: { exp: 5500, accumulated: 70500 },
    20: { exp: 7500, accumulated: 78000 },
    21: { exp: 7500, accumulated: 85500 },
    22: { exp: 7500, accumulated: 93000 },
    23: { exp: 7500, accumulated: 100500 },
    24: { exp: 7500, accumulated: 108000 },
    sum: 108000,
    frontlineVictory: 1500,
    frontlineDefeat: 1200,
    crystalineVictory: 900,
    crystalineDefeat: 700,
  };

  const [currentExp, setCurrentExp] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [calculatedValue, setCalculatedValue] = useState(0);
  const [error, setError] = useState("");

  let expDifference;
  // TODO:
  // verify that values are NOT undefined!
  function CalculateDifference(currentExp, currentLevel) {
    // console.log("currentExp", currentExp, typeof currentExp);
    // console.log("currentLevel", currentLevel, typeof currentLevel);
    // if (typeof currentExp === undefined && typeof currentLevel === undefined) {
    //   setIsCalculated(false);
    //   setError("Please input the data.");
    //   return;
    // } else {
    //   setError("");
    let previousLevel = Number(currentLevel) - 1;
    // console.log("previousLevel", previousLevel, typeof previousLevel);

    let previousAccumulated =
      currentLevel > 1
        ? seriesExp[previousLevel].accumulated
        : seriesExp[Number(currentLevel)].accumulated;
    // console.log(
    //   "previousAccumulated",
    //   previousAccumulated,
    //   typeof previousAccumulated
    // );

    expDifference =
      seriesExp.sum -
      (previousAccumulated +
        (seriesExp[Number(currentLevel)].exp - Number(currentExp)));
    // console.log("expDifference", expDifference, typeof expDifference);

    setIsCalculated(true);
    setCalculatedValue(expDifference);
    // }
  }

  return (
    <>
      <PageTitle />

      <div>
        <h3>PvP series calculator</h3>
        <p>
          Each series comes with unique rewards for series level: 5, 10, 15, 20
          and - usually the best one - at 25. <br />
          To get from level 1 to 25 you will need exactly{" "}
          <strong>{seriesExp.sum}</strong>&nbsp;EXP. <br />
          You can get EXP from various PvP activites such as: Frontlines,
          Crystaline Conflict etc. <br />
          For winning a Frontline you'll get{" "}
          <strong>{seriesExp.frontlineVictory}</strong>&nbsp;EXP or{" "}
          <strong>{seriesExp.crystalineVictory}</strong>&nbsp;EXP for winning a
          Crystaline Conflict match. <br />
          Even if you get defeated you'll get respectively{" "}
          <strong>{seriesExp.frontlineDefeat}</strong>
          &nbsp;EXP or <strong>
            {seriesExp.crystalineDefeat}
          </strong>&nbsp;EXP. <br />
          So...
        </p>
      </div>
      <div>
        To get to PvP Series level 25, you'll need to either:
        <ul className="pvp-list">
          <li>
            win <strong>{Math.ceil(seriesExp.sum / 1500)}</strong> Frontlines,
          </li>
          <li>
            lose <strong>{Math.ceil(seriesExp.sum / 1200)}</strong> Frontlines,
          </li>
          <li>
            win <strong>{Math.ceil(seriesExp.sum / 900)}</strong> Crystaline
            Conflicts or
          </li>
          <li>
            lose <strong>{Math.ceil(seriesExp.sum / 700)}</strong> Crystaline
            Conflicts.
          </li>
        </ul>
      </div>

      <div>
        <p>
          Now, let's calculate how many victories or defeats you still need to
          hit PvP series level 25!
        </p>
      </div>

      <Stack
        direction="horizontal"
        gap={2}
        style={{ marginBottom: "2vh", display: "inline-block" }}
      >
        <label htmlFor="current-level">
          Current PvP level
          <input
            id="current-level"
            type="number"
            placeholder="Current PvP level"
            style={{
              marginRight: "10px",
              marginBottom: "10px",
              marginLeft: "10px",
              width: "100px",
            }}
            value={currentLevel}
            required="true"
            onInput={(e) => setCurrentLevel(e.target.value)}
          />
        </label>
        <label htmlFor="current-exp">
          Current EXP
          <input
            id="current-exp"
            type="number"
            placeholder="Current EXP"
            style={{
              marginRight: "10px",
              marginBottom: "10px",
              marginLeft: "10px",
              width: "100px",
            }}
            value={currentExp}
            required="true"
            onInput={(e) => setCurrentExp(e.target.value)}
          />
        </label>{" "}
        <Button
          as="input"
          type="button"
          value="Check!"
          size="sm"
          variant="secondary"
          onClick={() => CalculateDifference(currentExp, currentLevel)}
          style={{ marginBottom: "5px" }}
        />
      </Stack>

      {isCalculated && (
        <div>
          You still got ahead of you either:
          <ul className="pvp-list">
            <li>
              <strong>
                {Math.ceil(calculatedValue / seriesExp.frontlineVictory)}
              </strong>{" "}
              Frontlines victories,
            </li>
            <li>
              <strong>
                {Math.ceil(calculatedValue / seriesExp.frontlineDefeat)}
              </strong>{" "}
              Frontlines defeats,
            </li>
            <li>
              <strong>
                {Math.ceil(calculatedValue / seriesExp.crystalineVictory)}
              </strong>{" "}
              Crystaline Conflicts victories or
            </li>
            <li>
              <strong>
                {Math.ceil(calculatedValue / seriesExp.crystalineDefeat)}
              </strong>{" "}
              Crystaline Conflicts defeats.
            </li>
          </ul>
        </div>
      )}

      {error !== "" ? error : ""}
    </>
  );
}
