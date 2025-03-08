import { Container } from "react-bootstrap";
import './About.css';
const About = () => {
  return (
    <>
      <h1>
        <img
            className="logo-h1"
          src="/sturgills-logo-square.png"
          alt="Squared-shaped Sturgill's Turtle Logo"
        />
      </h1>
      <Container>
        <h2>About Sturgill's Turtles</h2>
        <p className="justified">
          Sturgill's Turtles is a cover band based out of North Alabama. Taking
          their name from country act Sturgill Simpson, Sturgill's Turtles plays
          a wide variety of country, classic rock, 90s, and more. Members of the
          band include local talent Gus Hergert, drums and vocals, Matt Michael,
          bass and vocals, and Clay O'Dell, guitar and vocals. They may be
          perfect for your next event: wedding, seminar, corporate gathering.
          They may not be, too, but there's only one way to find out.
        </p>
      </Container>
    </>
  );
};
export default About;
