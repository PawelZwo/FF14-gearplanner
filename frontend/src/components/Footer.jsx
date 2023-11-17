// React-router import
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <p className="footer-legal no-margin-bottom">
        FINAL FANTASY is a registered trademark of Square Enix Holdings Co.,
        Ltd. FINAL FANTASY XIV © SQUARE ENIX CO., LTD.
      </p>
      <p className="footer-legal">
        Webapp by{" "}
        <Link
          to="https://github.com/PawelZwo"
          style={{ textDecoration: "none" }}
        >
          PawZwo
        </Link>
      </p>
    </div>
  );
}

export default Footer;
