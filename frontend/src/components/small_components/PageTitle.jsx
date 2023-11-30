// React imports
import { useEffect } from "react";

export default function PageTitle() {
  const currentUrl = window.location.pathname;
  useEffect(() => {
    switch (currentUrl) {
      case "/":
        document.title = "FF14 Gearplanner | Home";
        break;
      case "/jobs/":
        document.title = "FF14 Gearplanner | Jobs";
        break;
      case "/costs/":
        document.title = "FF14 Gearplanner | Gear costs";
        break;
      case "/pvp-series/":
        document.title = "FF14 Gearplanner | PvP series";
        break;
      case "/races/":
        document.title = "FF14 Gearplanner | Races";
        break;
      case "/gear/":
        document.title = "FF14 Gearplanner | All gear";
        break;
      case "/dpsgear/":
        document.title = "FF14 Gearplanner | DPS gear";
        break;
      case "/healergear/":
        document.title = "FF14 Gearplanner | Healer gear";
        break;
      case "/tankgear/":
        document.title = "FF14 Gearplanner | Tank gear";
        break;
      default:
        document.title = "Final Fantasy 14 Gearplanner";
    }
  }, [currentUrl]);
}
