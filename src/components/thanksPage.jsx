import "../App.css";

const ThanksPage = ({ rating }) => {
  return (
    <>
      <div className="imageContainer">
        <img src="thank-you.svg" alt="" />
      </div>
      <div className="ratingTab">{`You selected ${rating} out of 5`}</div>
      <div className="desc">
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </>
  );
};

export default ThanksPage;
