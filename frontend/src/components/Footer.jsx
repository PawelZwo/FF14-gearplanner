// React-router import
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <p className="footer-legal">
      FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.
      FINAL FANTASY XIV © SQUARE ENIX CO., LTD. &nbsp; &nbsp; | &nbsp; &nbsp;
      Webapp by&nbsp;
      <Link to="https://github.com/PawelZwo" target="_blank">
        PawZwo
      </Link>
      &nbsp; &copy; {new Date().getFullYear()}
    </p>
  );
}
