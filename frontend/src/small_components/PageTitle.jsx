// React
import { useEffect } from "react";

export default function PageTitle({ pageName }) {
  useEffect(() => {
    document.title = `FF14 Gearplanner | ${pageName}`;
  }, [pageName]);
}
