import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p style={{ fontSize: "10px" }}>Copyright &copy; 2025</p>
      {/* <a href="/about">About</a> */}
      <Link to="/about" style={{ textDecoration: "none", color: "gray" }}>
        About
      </Link>
    </footer>
  );
};
export default Footer;
