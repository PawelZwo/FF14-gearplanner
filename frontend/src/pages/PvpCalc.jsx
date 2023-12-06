// React imports
import { useState } from "react";

// React-Bootstrap imports
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

// Project's small components
import PageTitle from "../small_components/PageTitle";
import ErrorMessage from "../small_components/ErrorMessage";

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

  const [levelInput, setLevelInput] = useState(0);
  const [expInput, setExpInput] = useState(0);
  const [pvpSeriesData, setPvpSeriesData] = useState(0);
  const [expLeft, setExpLeft] = useState(0);

  const [displayControls, setDisplayControls] = useState({
    error: null,
    isCalculated: false,
    isDisabled: true,
  });

  let neededLevel;
  let calculatedValue;
  let calculateExpLeft;
  function CalculateDifference(e, levelValue, expValue) {
    e.preventDefault();

    neededLevel = levelValue === 1 ? 1 : levelValue - 1;

    calculatedValue =
      seriesExp.sum -
      (seriesExp[neededLevel].accumulated +
        (seriesExp[levelValue].exp - expValue));

    calculateExpLeft = seriesExp[neededLevel].exp - expValue;

    setPvpSeriesData(calculatedValue);
    setDisplayControls({ isCalculated: true });
    setExpLeft(calculateExpLeft);
  }

  function checkInputs() {
    if (
      levelInput >= 1 &&
      levelInput !== null &&
      levelInput < 25 &&
      expInput !== 0 &&
      expInput !== null &&
      expInput < 7500
    ) {
      setDisplayControls({
        error: null,
        isDisabled: false,
      });
    } else {
      setDisplayControls({
        error: "Level can be 1-25, and EXP can be 0-7500!",
        isDisabled: true,
      });
    }
  }

  return (
    <>
      <PageTitle pageName="PvP series" />

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

      <Stack direction="horizontal" gap={2} className="mb5 inline-block">
        <form
          onSubmit={(e) => CalculateDifference(e, levelInput, expInput)}
          onInput={() => checkInputs()}
        >
          <label htmlFor="current-level">
            Current PvP level
            <input
              id="current-level"
              type="number"
              placeholder="Current PvP level"
              className="pvp-calc-input"
              value={levelInput}
              required={true}
              onInput={(e) => setLevelInput(Number(e.target.value))}
              min={1}
              max={25}
            />
          </label>
          <label htmlFor="current-exp">
            Current EXP
            <input
              id="current-exp"
              type="number"
              placeholder="Current EXP"
              className="pvp-calc-input"
              value={expInput}
              required={true}
              onInput={(e) => setExpInput(Number(e.target.value))}
              min={0}
              max={7500}
            />
          </label>{" "}
          <Button
            as="input"
            type="submit"
            value="Check!"
            size="sm"
            variant="secondary"
            className="mb5"
            disabled={displayControls.isDisabled}
          />
        </form>
      </Stack>

      {displayControls.isCalculated && (
        <>
          <p className="mb5">
            You need <strong>{expLeft}</strong> EXP for the next level. To get
            to 25 you'll need either:
          </p>
          <ul>
            <li>
              <strong>
                {Math.ceil(pvpSeriesData / seriesExp.frontlineVictory)}
              </strong>{" "}
              Frontlines victories,
            </li>
            <li>
              <strong>
                {Math.ceil(pvpSeriesData / seriesExp.frontlineDefeat)}
              </strong>{" "}
              Frontlines defeats,
            </li>
            <li>
              <strong>
                {Math.ceil(pvpSeriesData / seriesExp.crystalineVictory)}
              </strong>{" "}
              Crystaline Conflicts victories or
            </li>
            <li>
              <strong>
                {Math.ceil(pvpSeriesData / seriesExp.crystalineDefeat)}
              </strong>{" "}
              Crystaline Conflicts defeats.
            </li>
          </ul>
        </>
      )}

      {displayControls.error && (
        <ErrorMessage error={displayControls.error} variant="info" />
      )}
    </>
  );
}
