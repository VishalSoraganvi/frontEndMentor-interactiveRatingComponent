import { StarIcon } from "lucide-react";
import "../App.css";

const Welcome = ({ onSubmit, onRate }) => {
  return (
    <>
      <div className="star">
        <StarIcon fill="orange" size={20} className="starIcon" />
      </div>
      <div className="text">
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="rate">
        <button className="rates" onClick={() => onRate(Number(1))}>
          1
        </button>
        <button className="rates" onClick={() => onRate(Number(2))}>
          2
        </button>
        <button className="rates" onClick={() => onRate(Number(3))}>
          3
        </button>
        <button className="rates" onClick={() => onRate(Number(4))}>
          4
        </button>
        <button className="rates" onClick={() => onRate(Number(5))}>
          5
        </button>
      </div>
      <button onClick={() => onSubmit()}>SUBMIT</button>
    </>
  );
};
export default Welcome;
