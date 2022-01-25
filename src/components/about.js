import Hero from "./hero";

const About = () => {
  return (
    <div>
      <Hero texts = "about page"/>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p>
              A tiny VS Code extension made up of a few commands that generate
               and insert lorem ipsum text into a text file. To use the
                and insert lorem ipsum text into a text file. To use the
                 and insert lorem ipsum text into a text file. To use the
                and insert lorem ipsum text into a text file. To use the
               extension, open the command palette F1 or cmd/ctrl+shift+p, type
              "lorem ipsum" and select to insert either a line or parag
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
