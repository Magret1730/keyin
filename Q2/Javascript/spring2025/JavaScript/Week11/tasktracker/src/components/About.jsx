import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ textAlign: "center", marginBottom: "50px" }}>
      <h2>Version 1.0.0</h2>
      {/* <a href="/">Go Back!!</a> */}

      <Link to="/" style={{ color: "gray", textDecoration: "none" }}>
        Go Back!!
      </Link>
    </div>
  );
};
export default About;
