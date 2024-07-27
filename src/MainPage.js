import heroShotImg from "../src/images/hero-shot-background.png";
import "rsuite/dist/rsuite.min.css";
import MyButton from "./Button";
function HeroShot() {
  return (
    <div
      className="hero-shot"
      style={{
        backgroundImage: `url(${heroShotImg})`,
      }}
    >
      {/* <img src={heroShotImg} className="App-logo-iq" alt="hero shot" /> */}
      <h1>Welcome to Luxe Living</h1>
      <MyButton color={"violet"} appearance={"subtle"} label="View More" />
    </div>
  );
}

export default HeroShot;
