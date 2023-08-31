import { useState } from "react";
import Welcome from "./components/welcome";
import ThanksPage from "./components/thanksPage";
import "./App.css";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(null);

  const onSubmitHandler = () => {
    setIsSubmitted(true);
  };

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="outer">
      <div className="box">
        {!isSubmitted && (
          <Welcome onSubmit={onSubmitHandler} onRate={handleRating} />
        )}
        {isSubmitted && <ThanksPage rating={rating} />}
      </div>
    </div>
  );
}

export default App;
