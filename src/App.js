import { StarIcon } from "lucide-react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="outer">
        <div className="box">
          <div className="star">
            <StarIcon fill="orange" size={20} className="starIcon" />
          </div>
          <div className="text">
            <h1>How did we do?</h1>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <div className="rate">
            <div className="rate1">
              <div className="ratings">1</div>
            </div>
            <div className="rate2">
              <div className="ratings">2</div>
            </div>
            <div className="rate3">
              <div className="ratings">3</div>
            </div>
            <div className="rate4">
              <div className="ratings">4</div>
            </div>
            <div className="rate5">
              <div className="ratings">5</div>
            </div>
          </div>
          <button>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default App;
