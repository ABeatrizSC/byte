import PropTypes from "prop-types";
import "./style.css";

export function HeroBanner(props) {
  const { image, text } = props;

  return (
    <section className="hero-banner">
      <div className="hero-banner__container">
        <img src={image} alt={text} className="hero-banner__image"></img>
        <p className="hero-banner__promotional-text">{text}</p>
      </div>
    </section>
  );
}

HeroBanner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
